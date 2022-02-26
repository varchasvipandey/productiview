import { useRef, useEffect, useState } from 'react';
import { TimeType } from 'types';
import { Container } from './pomodoro.style';
import { countDownASec } from './utils';
import { PomodoroState, TimerType } from './types';
import { TimerController, CountdownDisplay } from './components';

const defaultTimeState: TimeType = {
  hours: '00',
  minutes: '25',
  seconds: '00'
};

const workTime = 1 * 7 * 1000;
// const workTime = 25 * 60 * 1000;
// const breakTime = 5 * 60 * 1000;
const breakTime = 1 * 5 * 1000;

const Pomodoro = () => {
  const tickInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [timer, setTimer] = useState<PomodoroState>({
    timeLimit: workTime,
    isRunning: false,
    time: defaultTimeState,
    pausedAt: 0,
    timerType: 'work',
    finishedCount: 0
  });

  const triggerWorkTime = () => {
    const timeLimit = Date.now() + workTime;
    setTimer((prev) => ({ ...prev, timeLimit, isRunning: true, timerType: 'work' }));
    // Trigger start notification and sound
  };

  const triggerBreakTime = () => {
    const timeLimit = Date.now() + breakTime;
    setTimer((prev) => ({ ...prev, timeLimit, isRunning: true, timerType: 'break' }));
    // Trigger start notification and sound
  };

  const triggerTimer = (timerType: TimerType) => {
    if (timerType === 'work') triggerWorkTime();
    if (timerType === 'break') triggerBreakTime();
  };

  const stopTimer = (stopTimerTo?: TimerType) => {
    setTimer((prev) => {
      stopTimerTo = stopTimerTo || prev.timerType;

      return {
        ...prev,
        isRunning: false,
        time:
          stopTimerTo === 'work'
            ? { hours: '00', minutes: '25', seconds: '00', gap: 0 }
            : { hours: '00', minutes: '05', seconds: '00', gap: 0 },
        pausedAt: 0,
        timerType: stopTimerTo
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
        : prev.timerType === 'work'
        ? Date.now() + workTime
        : Date.now() + breakTime
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
      console.log('Tick', currTime.gap);

      if (!!currTime.gap && currTime.gap < 0) {
        if (tickInterval.current) {
          clearInterval(tickInterval.current);
        }

        setTimer((prev) => ({
          ...prev,
          timerType: prev.timerType === 'work' ? 'break' : 'work',
          time:
            prev.timerType === 'work'
              ? { hours: '00', minutes: '05', seconds: '00', gap: 0 }
              : { hours: '00', minutes: '25', seconds: '00', gap: 0 },
          pausedAt: 0,
          timeLimit: prev.timerType === 'work' ? Date.now() + workTime : Date.now() + breakTime,
          finishedCount: prev.finishedCount + 1,
          isRunning: false
        }));

        // Trigger notification and sound
      } else setTimer((prev) => ({ ...prev, time: currTime }));
    }, 1000);

    return () => {
      if (tickInterval.current) {
        clearInterval(tickInterval.current);
      }
    };
  }, [timer.isRunning, timer.timeLimit]);

  return (
    <Container className="glass-inverted flex-spread-col">
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
