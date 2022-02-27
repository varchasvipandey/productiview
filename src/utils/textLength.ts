export const shortenTextLength = (
  text: string,
  maxLength: number,
  addDots?: boolean
) => {
  if (text.length <= maxLength) return text;
  let res = text.slice(0, maxLength);
  if (addDots) res += "...";
  return res;
};
