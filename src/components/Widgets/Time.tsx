import React from 'react';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns/esm';
import Widget from './Widget';
import useNow from '../../hooks/use-now';
import useFormatter from '../../hooks/use-formatter';

type Props = {
  className?: string;
}

const Time: React.FC<Props> = ({ className }) => {
  const now = useNow(1000);

  const { formatTime } = useFormatter();

  return (
    <Widget className={className}>
      <Typography variant="h4" gutterBottom>{formatTime(now)}</Typography>
      <Typography>{format(now, 'PPPP')}</Typography>
    </Widget>
  );
};

export default Time;
