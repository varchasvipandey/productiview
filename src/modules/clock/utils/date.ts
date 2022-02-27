export const getDayDateMonthInWords = () => {
  const date = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  // @ts-ignore - options format is to be checked but it is correct
  const today = date.toLocaleString("en-IN", options);
  return today;
};
