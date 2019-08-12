import React, { useState, useEffect, useMemo } from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import { calculatePercentage, fromString, format } from './time-helpers';
import Infos from './Infos';

const Stats = ({ start, end }) => {
  const startTime = fromString(start);
  const endTime = fromString(end);

  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });


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
