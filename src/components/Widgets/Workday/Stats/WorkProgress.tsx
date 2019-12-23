import React from 'react';
import { LinearProgress, Box } from '@material-ui/core';
import { differenceInSeconds } from 'date-fns/esm';
import { calculatePercentage } from '../../../../utils/time-helpers';


interface IProps {
  readonly startTime: Date,
  readonly endTime: Date,
  readonly currentTime: Date,
  readonly lunchStartTime: Date,
  readonly lunchEndTime: Date,
}

const WorkProgress: React.FC<IProps> = ({
  startTime,
  endTime,
  currentTime,
  lunchStartTime,
  lunchEndTime,
}) => (
  <Box display="flex" width="100%">
    <LinearProgress
      variant="determinate"
      value={calculatePercentage(differenceInSeconds(lunchStartTime, startTime), differenceInSeconds(currentTime, startTime))}
      style={{
        width: `${calculatePercentage(differenceInSeconds(endTime, startTime), differenceInSeconds(lunchStartTime, startTime))}%`,
      }}
    />
    <LinearProgress
      variant="determinate"
      style={{
        width: `${calculatePercentage(differenceInSeconds(endTime, startTime), differenceInSeconds(lunchEndTime, lunchStartTime))}%`,
      }}
      color="secondary"
      value={calculatePercentage(differenceInSeconds(lunchEndTime, lunchStartTime), differenceInSeconds(currentTime, lunchStartTime))}
    />
    <LinearProgress
      variant="determinate"
      value={calculatePercentage(differenceInSeconds(endTime, lunchEndTime), differenceInSeconds(currentTime, lunchEndTime))}
      style={{ width: `${calculatePercentage(differenceInSeconds(endTime, startTime), differenceInSeconds(endTime, lunchEndTime))}%` }}
    />
  </Box>
);

export default WorkProgress;
