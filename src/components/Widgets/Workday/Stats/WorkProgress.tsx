import React from 'react';
import { LinearProgress, Box } from '@material-ui/core';
import { differenceInSeconds } from 'date-fns/esm';
import { formatPercentage } from '../../../../utils/time-helpers';

type Props = {
  startTime: Date;
  endTime: Date;
  currentTime: Date;
  lunchStartTime: Date;
  lunchEndTime: Date;
};

const WorkProgress: React.FC<Props> = ({
  startTime,
  endTime,
  currentTime,
  lunchStartTime,
  lunchEndTime,
}) => (
  <Box display="flex" width="100%">
    <LinearProgress
      variant="determinate"
      value={formatPercentage(
        differenceInSeconds(lunchStartTime, startTime),
        differenceInSeconds(currentTime, startTime)
      )}
      style={{
        width: `${formatPercentage(
          differenceInSeconds(endTime, startTime),
          differenceInSeconds(lunchStartTime, startTime)
        )}%`,
      }}
    />
    <LinearProgress
      variant="determinate"
      style={{
        width: `${formatPercentage(
          differenceInSeconds(endTime, startTime),
          differenceInSeconds(lunchEndTime, lunchStartTime)
        )}%`,
      }}
      color="secondary"
      value={formatPercentage(
        differenceInSeconds(lunchEndTime, lunchStartTime),
        differenceInSeconds(currentTime, lunchStartTime)
      )}
    />
    <LinearProgress
      variant="determinate"
      value={formatPercentage(
        differenceInSeconds(endTime, lunchEndTime),
        differenceInSeconds(currentTime, lunchEndTime)
      )}
      style={{
        width: `${formatPercentage(
          differenceInSeconds(endTime, startTime),
          differenceInSeconds(endTime, lunchEndTime)
        )}%`,
      }}
    />
  </Box>
);

export default WorkProgress;
