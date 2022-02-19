import { memo, useRef, useEffect, useState } from 'react';
import { tickASecond } from './utils';
import { TimeType } from './types';
import { Container } from './clock.style';

const defaultState: TimeType = {
  hours: '00',
  minutes: '00',
  seconds: '00',
  meridiem: 'AM'
};

const Clock = () => {
  const tickInterval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [time, setTime] = useState<TimeType>(defaultState);

  useEffect(() => {
    tickInterval.current = setInterval(() => setTime(tickASecond()), 1000);

    return () => {
      if (tickInterval.current) {
        clearInterval(tickInterval.current);
      }
    };
  }, []);

  return (
    <Container>
      <div className="body">
        <div className="body__time">
          <p className="body__time__value">
            {time.hours}
            <span>:</span>
            {time.minutes} {time.meridiem}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default memo(Clock);
