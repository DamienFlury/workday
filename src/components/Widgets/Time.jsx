import React from 'react';
import { Typography } from '@material-ui/core';
import Widget from './Widget';
import useNow from '../../hooks/use-now';

const Time = ({ className }) => {
  const now = useNow(1000);

  return (
    <Widget className={className}>
      <Typography variant="h5">{now.format('HH:mm')}</Typography>
      <Typography>{now.format('DD. MMMM YYYY')}</Typography>
    </Widget>
  );
};

export default Time;
