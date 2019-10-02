import moment from 'moment';


export const calculatePercentage = (fullTimeSpan: number, partialTimeSpan: number) => {
  const percentageValue = partialTimeSpan / fullTimeSpan * 100;
  if (percentageValue > 100) return 100;
  if (percentageValue < 0) return 0;
  return percentageValue;
};

export const humanizeWithMinutes = (duration: moment.Duration) => {
  if (duration.hours() === 0) {
    return `${Math.abs(duration.minutes())} minutes`;
  }
  if (duration.minutes() === 0) {
    return `${Math.abs(duration.hours())} hours`;
  }
  return `${Math.abs(duration.hours())} hours and ${Math.abs(duration.minutes())} minutes`;
};
