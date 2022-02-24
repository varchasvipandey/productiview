import { useRef, useEffect, useState } from 'react';
import { TimeType } from 'types';
import { Container } from './pomodoro.style';
import { countDownASec } from './utils';
import { PomodoroState } from './types';

const defaultTimeState: TimeType = {
  hours: '00',
  minutes: '00',
  seconds: '00'
};

const workTime = 25 * 60 * 1000;
const breakTime = 5 * 60 * 1000;

const Pomodoro = () => {
  const tickInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [timer, setTimer] = useState<PomodoroState>({
    timeLimit: workTime,
    isRunning: false,
    time: defaultTimeState,
    pausedAt: 0,
    timerType: 'work'
  });

  const triggerWorkTime = () => {
    const timeLimit = Date.now() + workTime;
    setTimer((prev) => ({ ...prev, timeLimit, isRunning: true }));
    // Trigger start notification and sound
  };

  const triggerBreakTime = () => {
    const timeLimit = Date.now() + breakTime;
    setTimer((prev) => ({ ...prev, timeLimit, isRunning: true }));
    // Trigger start notification and sound
  };

  const stopTimer = () => {
    setTimer((prev) => ({
      ...prev,
      isRunning: false,
      time: { hours: '00', minutes: '00', seconds: '00', gap: 0 }
    }));
  };

  const pauseTimer = () => {
    setTimer((prev) => ({ ...prev, isRunning: false, pausedAt: Date.now() }));
  };

  const resumeTimer = () => {
    setTimer((prev) => ({
      ...prev,
      isRunning: true,
      pausedAt: 0,
      timeLimit: Date.now() + prev.timeLimit - prev.pausedAt
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
        setTimer((prev) => ({ ...prev, isRunning: false }));
        // Trigger notification and sound
      }
      setTimer((prev) => ({ ...prev, time: currTime }));
    }, 1000);

    return () => {
      if (tickInterval.current) {
        clearInterval(tickInterval.current);
      }
    };
  }, [timer]);

  return (
    <Container>
      {timer.time.minutes}mins {timer.time.seconds}secs
      <div>
        <button onClick={triggerWorkTime} style={{ color: 'var(--color-back)' }}>
          Trigger Work Time
        </button>
        <button onClick={stopTimer} style={{ color: 'var(--color-back)' }}>
          Stop Timer
        </button>
        <button onClick={triggerBreakTime} style={{ color: 'var(--color-back)' }}>
          Trigger Break Time
        </button>
        <button onClick={pauseTimer} style={{ color: 'var(--color-back)' }}>
          Pause Timer
        </button>
        <button onClick={resumeTimer} style={{ color: 'var(--color-back)' }}>
          Resume Timer
        </button>
      </div>
    </Container>
  );
};

export default Pomodoro;
