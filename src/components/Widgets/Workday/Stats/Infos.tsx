import React from 'react';
import { Typography } from '@material-ui/core';
import { differenceInSeconds } from 'date-fns';
import { calculatePercentage, humanizeWithMinutes } from '../../../../utils/time-helpers';


interface IProps {
  readonly startTime: Date,
  readonly currentTime: Date,
  readonly endTime: Date,
  readonly lunchStartTime: Date,
  readonly lunchEndTime: Date,
}

const Infos: React.FC<IProps> = ({
  startTime, currentTime, endTime, lunchStartTime, lunchEndTime,
}) => (
  <>
    <Typography>
Progress (workday):
      {' '}
      {calculatePercentage(differenceInSeconds(endTime, startTime), differenceInSeconds(currentTime, startTime)).toFixed(2)}
%
    </Typography>
    {/* <Typography>
      Progress (work only):
      {' '}
      {calculatePercentage(endTime - startTime - (lunchEndTime - lunchStartTime), currentTime - startTime).toFixed(2)}
%
    </Typography> */}
    <Typography>
      {/* {currentTime < startTime
        ? `You will start working in ${humanizeWithMinutes(moment.duration(currentTime.diff(startTime)))}`
        : `You started working ${humanizeWithMinutes(moment.duration(currentTime.diff(startTime)))} ago`} */}
    </Typography>
    {currentTime < endTime
    && (
    <Typography>
You can leave in
      {' '}
      {/* {humanizeWithMinutes(moment.duration(endTime.diff(currentTime)))} */}
.
    </Typography>
    )
      }
    <Typography variant="h6">
      {currentTime > lunchStartTime && currentTime < lunchEndTime
        ? 'Lunch Time 😄' : currentTime > endTime ? 'Time to go home 👋' : 'Working 💼'}
    </Typography>
  </>
);

export default Infos;
