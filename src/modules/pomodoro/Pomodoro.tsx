import { useRef, useEffect, useState } from "react";
import { TimeType } from "types";
import { Container } from "./pomodoro.style";
import { countDownASec } from "./utils";
import { PomodoroState, TimerType } from "./types";
import { TimerController, CountdownDisplay } from "./components";
import { showNotification, requestNotificationPermission } from "utils";
import { useAudio } from "hooks";

import audioFinishWork from "assets/audio/notification-1.ogg";
import audioStartTimer from "assets/audio/notification-2.ogg";
import audioFinishBreak from "assets/audio/notification-3.ogg";

const workMins = "25";
const breakMins = "05";

const defaultTimeState: TimeType = {
  hours: "00",
  minutes: workMins,
  seconds: "00",
};

const workTime = +workMins * 60 * 1000;
const breakTime = +breakMins * 60 * 1000;

const Pomodoro = () => {
  const { toggle: playAudioStartTimer } = useAudio(audioStartTimer);
  const { toggle: playAudioFinishWork } = useAudio(audioFinishWork);
  const { toggle: playAudioFinishBreak } = useAudio(audioFinishBreak);

  const tickInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [timer, setTimer] = useState<PomodoroState>({
    timeLimit: workTime,
    isRunning: false,
    time: defaultTimeState,
    pausedAt: 0,
    timerType: "work",
    finishedCount: 0,
  });

  const triggerWorkTime = () => {
    const timeLimit = Date.now() + workTime;
    setTimer((prev) => ({
      ...prev,
      timeLimit,
      isRunning: true,
      timerType: "work",
    }));
    // Trigger start notification and sound
  };

  const triggerBreakTime = () => {
    const timeLimit = Date.now() + breakTime;
    setTimer((prev) => ({
      ...prev,
      timeLimit,
      isRunning: true,
      timerType: "break",
    }));
    // Trigger start notification and sound
  };

  const triggerTimer = (timerType: TimerType) => {
    if (timerType === "work") triggerWorkTime();
    if (timerType === "break") triggerBreakTime();
    requestNotificationPermission();
    playAudioStartTimer();
  };

  const stopTimer = (stopTimerTo?: TimerType) => {
    setTimer((prev) => {
      stopTimerTo = stopTimerTo || prev.timerType;

      return {
        ...prev,
        isRunning: false,
        time:
          stopTimerTo === "work"
            ? { hours: "00", minutes: workMins, seconds: "00", gap: 0 }
            : { hours: "00", minutes: breakMins, seconds: "00", gap: 0 },
        pausedAt: 0,
        timerType: stopTimerTo,
      };
    });
  };

  const pauseTimer = () => {
    setTimer((prev) => ({ ...prev, isRunning: false, pausedAt: Date.now() }));
  };

  const resumeTimer = () => {
    setTimer((prev) => ({
      ...prev,
      isRunning: true,
      pausedAt: 0,
      timeLimit: prev.pausedAt
        ? Date.now() + prev.timeLimit - prev.pausedAt
        : prev.timerType === "work"
        ? Date.now() + workTime
        : Date.now() + breakTime,
    }));
  };

  useEffect(() => {
    if (!timer.isRunning) {
      if (tickInterval.current) {
        clearInterval(tickInterval.current);
      }
      return;
    }
    tickInterval.current = setInterval(() => {
      const currTime = countDownASec(timer.timeLimit);

      if (!!currTime.gap && currTime.gap < 0) {
        if (tickInterval.current) {
          clearInterval(tickInterval.current);
        }

        const currentTimerType = timer.timerType;

        // Push a notification
        showNotification(
          "Time's up!",
          currentTimerType === "work"
            ? "Time for a quick break!"
            : "It's time to continue the grind!"
        );

        // Play notification sound
        if (currentTimerType === "work") playAudioFinishWork();
        if (currentTimerType === "break") playAudioFinishBreak();

        setTimer((prev) => ({
          ...prev,
          timerType: prev.timerType === "work" ? "break" : "work",
          time:
            prev.timerType === "work"
              ? { hours: "00", minutes: breakMins, seconds: "00", gap: 0 }
              : { hours: "00", minutes: workMins, seconds: "00", gap: 0 },
          pausedAt: 0,
          timeLimit:
            prev.timerType === "work"
              ? Date.now() + workTime
              : Date.now() + breakTime,
          finishedCount: prev.finishedCount + 1,
          isRunning: false,
        }));

        // Trigger notification and sound
      } else setTimer((prev) => ({ ...prev, time: currTime }));
    }, 1000);

    return () => {
      if (tickInterval.current) {
        clearInterval(tickInterval.current);
      }
    };
  }, [timer.isRunning, timer.timeLimit, timer.timerType]);

  return (
    <Container className="glass-inverted flex-spread-col appear-slow">
      <CountdownDisplay time={timer.time} timerType={timer.timerType} />
      <TimerController
        isRunning={timer.isRunning}
        isPaused={!!timer.pausedAt}
        finishedCount={timer.finishedCount}
        triggerTimer={triggerTimer}
        pauseTimer={pauseTimer}
        resumeTimer={resumeTimer}
        stopTimer={stopTimer}
      />
    </Container>
  );
};

export default Pomodoro;
