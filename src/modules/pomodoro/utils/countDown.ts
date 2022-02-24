import { TimeType } from 'types';

export const countDownASec = (countDownDate: number): TimeType => {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the gap between now and the count down date
  const gap = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let hours: string | number = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes: string | number = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
  let seconds: string | number = Math.floor((gap % (1000 * 60)) / 1000);

  hours = hours < 0 ? 0 : hours;
  minutes = minutes < 0 ? 0 : minutes;
  seconds = seconds < 0 ? 0 : seconds;

  // append 0 to single digit
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;

  return {
    hours,
    minutes,
    seconds,
    gap
  };
};
