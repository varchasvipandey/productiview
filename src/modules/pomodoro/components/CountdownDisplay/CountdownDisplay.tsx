import { memo, useState } from "react";

import { TimeType } from "types";
import { ExpandToolButton } from "components";

import { Container } from "./countdownDisplay.style";
import { TimerType } from "../../types";

interface CountdownDisplayProps {
  time: TimeType;
  timerType: TimerType;
}

const CountdownDisplay = ({ time, timerType }: CountdownDisplayProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <Container isExpanded={isExpanded}>
      <div className="top-bar">
        <div className="top-bar__time">
          <p className="top-bar__time__digit">{time.minutes}</p>
          <p className="top-bar__time__separator">:</p>
          <p className="top-bar__time__digit">{time.seconds}</p>
        </div>
        <div className="top-bar__cta">
          <p className="top-bar__cta__timer-type">
            {timerType === "work" ? "Work Time" : "Break Time"}
          </p>
          <div
            className="top-bar__cta__action"
            title={isExpanded ? "Minimize" : "Maximize"}
          >
            <ExpandToolButton
              onClick={handleToggleExpand}
              ariaLabel={isExpanded ? "Minimize" : "Maximize"}
              expanded={isExpanded}
            />
          </div>
        </div>
      </div>

      <div className="time">
        <div className="time__unit">
          <p className="time__unit__digits">{time.minutes}</p>
          <p className="time__unit__label">MINS</p>
        </div>

        <div className="time__separator">:</div>

        <div className="time__unit">
          <p className="time__unit__digits">{time.seconds}</p>
          <p className="time__unit__label">SECS</p>
        </div>
      </div>
    </Container>
  );
};

export default memo(CountdownDisplay);
