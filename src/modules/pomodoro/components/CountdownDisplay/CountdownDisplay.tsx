import { memo } from 'react';
import { TimeType } from 'types';
import { Container } from './countdownDisplay.style';

interface CountdownDisplayProps {
  time: TimeType;
}

const CountdownDisplay = ({ time }: CountdownDisplayProps) => {
  return (
    <Container>
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
