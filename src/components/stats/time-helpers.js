

export const calculatePercentage = (fullTimeSpan, partialTimeSpan) => (partialTimeSpan / fullTimeSpan * 100 >= 100 ? 100 : partialTimeSpan / fullTimeSpan * 100);

export const humanizeWithMinutes = duration => `${Math.abs(duration.hours())} hours and ${Math.abs(duration.minutes())} minutes`;
