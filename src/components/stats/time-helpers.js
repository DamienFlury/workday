

export const calculatePercentage = (fullTimeSpan, partialTimeSpan) => {
  const percentageValue = partialTimeSpan / fullTimeSpan * 100;
  if (percentageValue > 100) return 100;
  if (percentageValue < 0) return 0;
  return percentageValue;
};

export const humanizeWithMinutes = (duration) => {
  if (duration.hours() === 0) {
    return `${Math.abs(duration.minutes())} minutes`;
  }
  if (duration.minutes === 0) {
    return `${Math.abs(duration.hours())} hours`;
  }
  return `${Math.abs(duration.hours())} hours and ${Math.abs(duration.minutes())} minutes`;
};
