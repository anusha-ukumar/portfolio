export const getGreetingString = (): string => {
  const time = new Date().getHours();
  if (time <= 12) {
    return "morning";
  } else if (time <= 18) {
    return "afternoon";
  }
  return "evening";
};
