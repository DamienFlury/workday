import React, { useState, useEffect, useMemo } from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import calculatePercentage from './calculatePercentage';
import Infos from './Infos';

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

  const percentage = useMemo(() => calculatePercentage(startTime, currentTime, endTime),
    [startTime, currentTime, endTime]);

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
      <LinearProgress variant="determinate" value={percentage} />
      <p
        style={{
          marginLeft: `${percentage}%`,
        }}
      >
        {format(currentTime)}
      </p>
      <Infos startTime={startTime} currentTime={currentTime} endTime={endTime} />
    </div>
  );
};

export default Stats;
