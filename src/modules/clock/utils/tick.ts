import { TimeType } from '../types';

export const tickASecond = (): TimeType => {
  let meridiem: string;
  //Save the times in variables

  const today = new Date();

  let hours: number | string = today.getHours();
  let minutes: number | string = today.getMinutes();
  let seconds: number | string = today.getSeconds();

  //Set the AM or PM time

  if (hours >= 12) {
    meridiem = ' PM';
  } else {
    meridiem = ' AM';
  }

  //convert hours to 12 hour format and put 0 in front
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  //Put 0 in front of single digit minutes and seconds

  if (minutes < 10) {
    minutes = '0' + minutes;
  } else {
    minutes = minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  } else {
    seconds = seconds;
  }

  return {
    hours,
    minutes,
    seconds,
    meridiem
  };
};
