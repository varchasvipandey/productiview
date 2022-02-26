import { useState, useCallback, useEffect } from 'react';
import { Container } from './timerController.style';
import { ToolButton } from 'components';
import { TimerType } from '../../types';

interface TimerControllerProps {
  isRunning: boolean;
  isPaused: boolean;
  finishedCount: number;
  triggerTimer: (timerType: TimerType) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  stopTimer: (stopTimerTo?: TimerType) => void;
}

const TimerController = ({
  isRunning,
  isPaused,
  finishedCount,
  triggerTimer,
  pauseTimer,
  resumeTimer,
  stopTimer
}: TimerControllerProps) => {
  const [timerType, setTimerType] = useState<TimerType>('work');

  const handlePlayPause = useCallback(() => {
    if (!isRunning) {
      if (isPaused) resumeTimer();
      else triggerTimer(timerType);
    } else pauseTimer();
  }, [isRunning, timerType]);

  const handleSwitchTimer = useCallback(() => {
    if (timerType === 'work') stopTimer('break');
    else if (timerType === 'break') stopTimer('work');
    setTimerType((prev) => (prev === 'work' ? 'break' : 'work'));
  }, [timerType]);

  // update controller timer type after every completion of a countdown
  useEffect(() => {
    if (finishedCount) setTimerType((prev) => (prev === 'work' ? 'break' : 'work'));
  }, [finishedCount]);

  return (
    <Container>
      <div className="actions-set">
        <div className="action" title={isRunning ? 'Pause timer' : 'Start timer'}>
          <ToolButton iconName={isRunning ? 'pause' : 'play'} onClick={handlePlayPause} />
        </div>
        <div className="action" title="Stop timer and reset">
          <ToolButton iconName="stop" onClick={stopTimer} />
        </div>
      </div>

      <div className="actions-set">
        <div className="action" title={timerType === 'work' ? 'Switch to break' : 'Switch to work'}>
          <ToolButton
            iconName={timerType === 'work' ? 'workOff' : 'workOn'}
            onClick={handleSwitchTimer}
          />
        </div>

        <div className="action" title={timerType === 'work' ? 'Switch to break' : 'Switch to work'}>
          <ToolButton
            iconName={timerType === 'work' ? 'workOff' : 'workOn'}
            onClick={handleSwitchTimer}
          />
        </div>
      </div>
    </Container>
  );
};

export default TimerController;
