import React from 'react';
import { LinearProgress, Box } from '@material-ui/core';
import { Moment } from 'moment';
import { calculatePercentage } from '../../../../utils/time-helpers';


interface IProps {
  startTime: Moment,
  endTime: Moment,
  currentTime: Moment,
  lunchStartTime: Moment,
  lunchEndTime: Moment,
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
      value={calculatePercentage(lunchStartTime.diff(startTime), currentTime.diff(startTime))}
      style={{
        width: `${calculatePercentage(endTime.diff(startTime), lunchStartTime.diff(startTime))}%`,
      }}
    />
    <LinearProgress
      variant="determinate"
      style={{
        width: `${calculatePercentage(endTime.diff(startTime), lunchEndTime.diff(lunchStartTime))}%`,
      }}
      color="secondary"
      value={calculatePercentage(lunchEndTime.diff(lunchStartTime), currentTime.diff(lunchStartTime))}
    />
    <LinearProgress
      variant="determinate"
      value={calculatePercentage(endTime.diff(lunchEndTime), currentTime.diff(lunchEndTime))}
      style={{ width: `${calculatePercentage(endTime.diff(startTime), endTime.diff(lunchEndTime))}%` }}
    />
  </Box>
);

export default WorkProgress;
