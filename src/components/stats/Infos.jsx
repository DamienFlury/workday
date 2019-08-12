import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import {
  calculatePercentage,
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
You started working
      {' '}
      {moment.duration(startTime - currentTime).humanize(true)}
    </Typography>
    <Typography>
You can leave
      {' '}
      {moment.duration(endTime - currentTime).humanize(true)}
    </Typography>
    <Typography variant="h6">
      {currentTime > lunchStartTime && currentTime < lunchEndTime
        ? 'Lunch Time 😄' : currentTime > endTime ? 'Time to go home 👋' : 'Working 💼'}
    </Typography>
  </>
);

export default Infos;
