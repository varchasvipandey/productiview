import { TimeType } from "types";

export const tickASecond = (): TimeType => {
  const today = new Date();

  let hours: number | string = today.getHours();
  let minutes: number | string = today.getMinutes();
  let seconds: number | string = today.getSeconds();
  let meridiem: string;

  // set meridiem based on 24 hour clock
  if (hours >= 12) meridiem = "PM";
  else meridiem = "AM";

  // convert to 12 hours format
  if (hours > 12) hours = hours - 12;
  else if (hours === 0) hours = 12;

  // append 0 to single digit
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return {
    hours,
    minutes,
    seconds,
    meridiem,
  };
};
