export const toDecimal = time => time.hours + time.minutes / 60 + time.seconds / 3600;

export const subtract = (a, b) => {
  let seconds = a.seconds - b.seconds;
  let minutes = a.minutes - b.minutes;
  let hours = a.hours - b.hours;

  if (seconds < 0) {
    minutes -= 1;
    seconds += 60;
  }
  if (minutes < 0) {
    hours -= 1;
    minutes += 60;
  }
  if (hours < 0 || minutes < 0 || seconds < 0) {
    hours = 0;
    minutes = 0;
    seconds = 0;
  }
  return { hours, minutes, seconds };
};

export const fromString = (str) => {
  const [hours, minutes, seconds] = str.split(':');
  return ({
    hours: Number(hours),
    minutes: Number(minutes),
    seconds: Number(seconds) || 0,
  });
};


export const calculatePercentage = (fullTimeSpan, partialTimeSpan) => partialTimeSpan / fullTimeSpan * 100;

export const hoursDone = (startTime, currentTime) => toDecimal(currentTime) - toDecimal(startTime);


export const format = time => `${`0${time.hours}`.slice(-2)}:${`0${time.minutes}`.slice(-2)}`;

export const toLocalTimeString = time => `${time.hours} h ${time.minutes} min`;
