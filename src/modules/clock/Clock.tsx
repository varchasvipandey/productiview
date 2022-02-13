import { memo, useRef, useEffect, useState } from 'react';
import { tickASecond } from './utils';
import { TimeType } from './types';

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
    <div>
      {time.hours} : {time.minutes} : {time.seconds} : {time.meridiem}
    </div>
  );
};

export default memo(Clock);
