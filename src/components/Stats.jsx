import React, { useState, useEffect } from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';

const Stats = ({ start, end }) => {
  const [startHours, startMinutes] = start.split(':');
  const startTime = {
    hours: Number(startHours),
    minutes: Number(startMinutes),
  };

  const [endHours, endMinutes] = end.split(':');
  const endTime = { hours: Number(endHours), minutes: Number(endMinutes) };

  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  const format = time => `${`0${time.hours}`.slice(-2)}:${`0${time.minutes}`.slice(-2)}`;

  const getPercentage = () => {
    const startAsDecimal = startTime.hours + startTime.minutes / 60;
    const nowAsDecimal = currentTime.hours + currentTime.minutes / 60 + currentTime.seconds / 3600;
    const endAsDecimal = endTime.hours + endTime.minutes / 60;
    if (startAsDecimal > nowAsDecimal) return 0;
    if (endAsDecimal < nowAsDecimal) return 100;
    return (
      ((nowAsDecimal - startAsDecimal) / (endAsDecimal - startAsDecimal)) * 100
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTime({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds(),
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [currentTime]);

  return (
    <div>
      <Box display="flex">
        <Typography style={{ flex: 1 }}>{format(startTime)}</Typography>
        <Typography>{format(endTime)}</Typography>
      </Box>
      <LinearProgress variant="determinate" value={getPercentage()} />
      <p
        style={{
          marginLeft: `${getPercentage()}%`,
        }}
      >
        {format(currentTime)}
      </p>
    </div>
  );
};

export default Stats;
