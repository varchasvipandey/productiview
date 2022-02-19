export const getRandomElementFromArray = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];
