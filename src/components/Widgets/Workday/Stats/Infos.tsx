import React from 'react';
import { Typography } from '@material-ui/core';
import { differenceInSeconds } from 'date-fns';
import {
  formatPercentage,
  formatDistanceWithPrefix,
} from '../../../../utils/time-helpers';

type Props = {
  startTime: Date;
  currentTime: Date;
  endTime: Date;
  lunchStartTime: Date;
  lunchEndTime: Date;
};

const Infos: React.FC<Props> = ({
  startTime,
  currentTime,
  endTime,
  lunchStartTime,
  lunchEndTime,
}) => (
  <>
    <Typography>
      Progress (workday):{' '}
      {formatPercentage(
        differenceInSeconds(endTime, startTime),
        differenceInSeconds(currentTime, startTime)
      ).toFixed(2)}
      %
    </Typography>
    {/* <Typography>
      Progress (work only):
      {' '}
      {formatPercentage(endTime - startTime - (lunchEndTime - lunchStartTime), currentTime - startTime).toFixed(2)}
%
    </Typography> */}
    <Typography>
      {/* {currentTime < startTime
        ? `You will start working in ${humanizeWithMinutes(moment.duration(currentTime.diff(startTime)))}`
        : `You started working ${humanizeWithMinutes(moment.duration(currentTime.diff(startTime)))} ago`} */}
    </Typography>
    <Typography>
      You can leave {formatDistanceWithPrefix(currentTime, endTime)}.
    </Typography>
    <Typography variant="h6">
      {currentTime > lunchStartTime && currentTime < lunchEndTime
        ? 'Lunch Time 😄'
        : currentTime > endTime
        ? 'Time to go home 👋'
        : 'Working 💼'}
    </Typography>
  </>
);

export default Infos;
