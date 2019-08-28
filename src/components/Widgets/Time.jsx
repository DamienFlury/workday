import React from 'react';
import { Typography } from '@material-ui/core';
import Widget from './Widget';
import useNow from '../../hooks/use-now';
import useFormatter from '../../hooks/use-formatter';

const Time = ({ className }) => {
  const now = useNow(1000);

  const { formatTime } = useFormatter();

  return (
    <Widget className={className}>
      <Typography variant="h4" gutterBottom>{formatTime(now)}</Typography>
      <Typography>{now.format('LL')}</Typography>
    </Widget>
  );
};

export default Time;
