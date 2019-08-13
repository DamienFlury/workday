import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import Widget from './Widget';

const Time = ({ className }) => {
  const [now, setNow] = useState(moment());
  useEffect(() => {
    const timeout = setTimeout(() => {
      setNow(moment());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <Widget className={className}>
      <Typography variant="h5">{now.format('HH:mm')}</Typography>
      <Typography>{now.format('DD. MMMM YYYY')}</Typography>
    </Widget>
  );
};

export default Time;
