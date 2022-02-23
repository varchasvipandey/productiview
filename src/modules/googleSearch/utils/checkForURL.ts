export const isURL = (str: string) => {
  const pattern = new RegExp(/^(http|https):\/\/[^ "]+$/);
  return pattern.test(str) || str.includes('.com');
};
