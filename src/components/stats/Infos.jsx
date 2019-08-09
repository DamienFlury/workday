import React from 'react';
import { Typography } from '@material-ui/core';
import calculatePercentage from './calculatePercentage';

const Infos = ({ startTime, currentTime, endTime }) => (
  <>
    <Typography>
Progress:
      {' '}
      {calculatePercentage(startTime, currentTime, endTime).toFixed(2)}
%
    </Typography>
  </>
);

export default Infos;
