import { memo, useRef, useEffect, useState, useMemo } from 'react';
import { tickASecond, getDayDateMonthInWords } from './utils';
import { TimeType } from './types';
import { Container } from './clock.style';

const defaultState: TimeType = {
  hours: '00',
  minutes: '00',
  seconds: '00',
  meridiem: 'AM'
};

const Clock = () => {
  const date = useRef(getDayDateMonthInWords());

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

  if (time.hours === '00' && time.minutes === '00' && time.seconds === '00') return null;

  return (
    <Container>
      <div className="body flex-center-col">
        <div className="body__time">
          <div className="body__time__value">
            <p className="body__time__value__digit">{time.hours}</p>
            <p className="body__time__value__separator">:</p>
            <p className="body__time__value__digit">{time.minutes}</p>
            <p className="body__time__value__meridiem">{time.meridiem}</p>
          </div>
        </div>

        <p className="body__date">{date.current}</p>
      </div>
    </Container>
  );
};

export default memo(Clock);
