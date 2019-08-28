import React from 'react';
import { LinearProgress, Box } from '@material-ui/core';
import { calculatePercentage } from '../../../../utils/time-helpers';


const WorkProgress = ({
  startTime,
  endTime,
  currentTime,
  lunchStartTime,
  lunchEndTime,
}) => (
  <Box display="flex" width="100%">
    <LinearProgress
      variant="determinate"
      value={calculatePercentage(lunchStartTime - startTime, currentTime - startTime)}
      style={{
        width: `${calculatePercentage(endTime - startTime, lunchStartTime - startTime)}%`,
      }}
    />
    <LinearProgress
      variant="determinate"
      style={{
        width: `${calculatePercentage(endTime - startTime, lunchEndTime - lunchStartTime)}%`,
      }}
      color="secondary"
      value={calculatePercentage(lunchEndTime - lunchStartTime, currentTime - lunchStartTime)}
    />
    <LinearProgress
      variant="determinate"
      value={calculatePercentage(endTime - lunchEndTime, currentTime - lunchEndTime)}
      style={{ width: `${calculatePercentage(endTime - startTime, endTime - lunchEndTime)}%` }}
    />
  </Box>
);

export default WorkProgress;
