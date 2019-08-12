import React, { useState, useEffect, useMemo } from 'react';
import { LinearProgress, Typography, Box } from '@material-ui/core';
import moment from 'moment';
import { calculatePercentage } from './time-helpers';
import Infos from './Infos';

const Stats = ({
  start, end, lunchStart, lunchEnd,
}) => {
  const startTime = moment(start, 'HH:mm');
  const endTime = moment(end, 'HH:mm');
  const lunchStartTime = moment(lunchStart, 'HH:mm');
  const lunchEndTime = moment(lunchEnd, 'HH:mm');

  const [currentTime, setCurrentTime] = useState(moment());


  const percentage = useMemo(() => calculatePercentage(endTime - startTime, currentTime - startTime),
    [startTime, currentTime, endTime]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTime(moment());
    }, 1000);
    return () => clearTimeout(timeout);
  }, [currentTime]);

  return (
    <div>
      <Box display="flex">
        <Typography style={{ flex: 1 }}>{startTime.format('HH:mm')}</Typography>
        <Typography>{endTime.format('HH:mm')}</Typography>
      </Box>
      <LinearProgress variant="determinate" value={percentage} />
      <p
        style={{
          marginLeft: `${percentage}%`,
        }}
      >
        {currentTime.format('HH:mm')}
      </p>
      <Infos startTime={startTime} endTime={endTime} currentTime={currentTime} lunchStartTime={lunchStartTime} lunchEndTime={lunchEndTime} />
    </div>
  );
};

export default Stats;
