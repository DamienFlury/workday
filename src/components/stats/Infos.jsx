import React from 'react';
import { Typography } from '@material-ui/core';
import {
  calculatePercentage, format, subtract, toLocalTimeString,
} from './time-helpers';

const Infos = ({ startTime, currentTime, endTime }) => (
  <>
    <Typography>
Progress:
      {' '}
      {calculatePercentage(startTime, currentTime, endTime).toFixed(2)}
%
    </Typography>
    <Typography>
Time worked:
      {' '}
      {toLocalTimeString(subtract(currentTime, startTime))}
    </Typography>
    <Typography>
Time remaining:
      {' '}
      {format(subtract(endTime, currentTime))}
    </Typography>
  </>
);

export default Infos;
