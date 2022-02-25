import { useState, useCallback } from 'react';
import { Container } from './timerController.style';
import { ToolButton } from 'components';
import { TimerType } from '../../types';

interface TimerControllerProps {
  isRunning: boolean;
  isPaused: boolean;
  triggerTimer: (timerType: TimerType) => void;
  pauseTimer: () => void;
  resumeTimer: () => void;
  stopTimer: (stopTimerTo?: TimerType) => void;
}

const TimerController = ({
  isRunning,
  isPaused,
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
    setTimerType((prev) => {
      if (prev === 'work') stopTimer('break');
      else if (prev === 'break') stopTimer('work');
      return prev === 'work' ? 'break' : 'work';
    });
  }, []);

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
      </div>
    </Container>
  );
};

export default TimerController;
