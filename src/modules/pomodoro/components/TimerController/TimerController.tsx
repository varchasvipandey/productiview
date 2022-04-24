import { useState, useCallback, useEffect } from "react";
import { Container } from "./timerController.style";
import { ToolButton, ActionSet } from "components";
import { TimerType } from "../../types";

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
  stopTimer,
}: TimerControllerProps) => {
  const [timerType, setTimerType] = useState<TimerType>("work");

  const handlePlayPause = useCallback(() => {
    if (!isRunning) {
      if (isPaused) resumeTimer();
      else triggerTimer(timerType);
    } else pauseTimer();
  }, [isRunning, timerType]);

  const handleSwitchTimer = useCallback(() => {
    if (timerType === "work") stopTimer("break");
    else if (timerType === "break") stopTimer("work");
    setTimerType((prev) => (prev === "work" ? "break" : "work"));
  }, [timerType]);

  // update controller timer type after every completion of a countdown
  useEffect(() => {
    if (finishedCount)
      setTimerType((prev) => (prev === "work" ? "break" : "work"));
  }, [finishedCount]);

  return (
    <Container>
      <ActionSet.ActionSetWrapper>
        <ActionSet.Action title={isRunning ? "Pause timer" : "Start timer"}>
          <ToolButton
            iconName={isRunning ? "pause" : "play"}
            onClick={handlePlayPause}
            ariaLabel={isRunning ? "Pause timer" : "Start timer"}
          />
        </ActionSet.Action>

        <ActionSet.Action title="Stop timer and reset">
          <ToolButton
            iconName="stop"
            onClick={stopTimer}
            ariaLabel="Stop timer and reset"
          />
        </ActionSet.Action>
      </ActionSet.ActionSetWrapper>

      <ActionSet.ActionSetWrapper>
        <ActionSet.Action
          title={timerType === "work" ? "Switch to break" : "Switch to work"}
        >
          <ToolButton
            iconName={timerType === "work" ? "workOff" : "workOn"}
            onClick={handleSwitchTimer}
            ariaLabel={
              timerType === "work" ? "Switch to break" : "Switch to work"
            }
          />
        </ActionSet.Action>
      </ActionSet.ActionSetWrapper>
    </Container>
  );
};

export default TimerController;
