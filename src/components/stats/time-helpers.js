

export const calculatePercentage = (fullTimeSpan, partialTimeSpan) => partialTimeSpan / fullTimeSpan * 100;

export const humanizeWithMinutes = duration => `${duration.asMilliseconds() >= 0 ? 'in ' : ''}${Math.abs(duration.hours())} hours and ${Math.abs(duration.minutes())} minutes${duration.asMilliseconds() < 0 ? ' ago' : ''}`;
