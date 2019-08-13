

export const calculatePercentage = (fullTimeSpan, partialTimeSpan) => (partialTimeSpan / fullTimeSpan * 100 >= 100 ? 100 : partialTimeSpan / fullTimeSpan * 100);

export const humanizeWithMinutes = (duration) => {
  if (duration.hours() === 0) {
    return `${duration.minutes()} minutes`;
  }
  if (duration.minutes === 0) {
    return `${duration.hours()} hours`;
  }
  return `${Math.abs(duration.hours())} hours and ${Math.abs(duration.minutes())} minutes`;
};
