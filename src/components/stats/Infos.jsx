import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import {
  calculatePercentage, humanizeWithMinutes,
} from './time-helpers';

moment.relativeTimeThreshold('h', 60);

const Infos = ({
  startTime, currentTime, endTime, lunchStartTime, lunchEndTime,
}) => (
  <>
    <Typography>
Progress (workday):
      {' '}
      {calculatePercentage(endTime - startTime, currentTime - startTime).toFixed(2)}
%
    </Typography>
    {/* <Typography>
      Progress (work only):
      {' '}
      {calculatePercentage(endTime - startTime - (lunchEndTime - lunchStartTime), currentTime - startTime).toFixed(2)}
%
    </Typography> */}
    <Typography>
      {currentTime < startTime
        ? `You will start working in ${humanizeWithMinutes(moment.duration(currentTime - startTime))}`
        : `You started working ${humanizeWithMinutes(moment.duration(currentTime - startTime))} ago`}
    </Typography>
    {currentTime < endTime
    && (
    <Typography>
You can leave in
      {' '}
      {humanizeWithMinutes(moment.duration(endTime - currentTime))}
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
