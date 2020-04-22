export const createTimer = (minutes = 25, seconds = 0) => {
  const date = new Date(`August 19, 1975 20:${minutes}:${seconds}`);
  return date;
};
