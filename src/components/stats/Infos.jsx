import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import {
  calculatePercentage, humanizeWithMinutes,
} from './time-helpers';

moment.relativeTimeThreshold('h', 60);

const Infos = ({ startTime, currentTime, endTime }) => (
  <>
    <Typography>
Progress:
      {' '}
      {calculatePercentage(endTime - startTime, currentTime - startTime).toFixed(2)}
%
    </Typography>
    <Typography>
Started working:
      {' '}
      {humanizeWithMinutes(moment.duration(startTime - currentTime))}
    </Typography>
    <Typography>
You can leave
      {' '}
      {humanizeWithMinutes(moment.duration(endTime - currentTime))}
    </Typography>
  </>
);

export default Infos;
