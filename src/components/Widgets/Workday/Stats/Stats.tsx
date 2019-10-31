import React, { useMemo } from 'react';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import { Moment } from 'moment';
import { differenceInSeconds } from 'date-fns';
import { calculatePercentage } from '../../../../utils/time-helpers';
import Infos from './Infos';
import WorkProgress from './WorkProgress';
import useNow from '../../../../hooks/use-now';
import useFormatter from '../../../../hooks/use-formatter';

const BottomText = styled.div<{ marginLeft: string}>`
  display: inline-block;
  width: auto;
  margin-left: ${props => props.marginLeft};
  transform: translateX(-50%);
  margin-top: 2px;
  margin-bottom: 20px;
`;

interface IProps {
  readonly start: Date,
  readonly end: Date,
  readonly lunchStart: Date,
  readonly lunchEnd: Date,
}

const Stats: React.FC<IProps> = ({
  start, end, lunchStart, lunchEnd,
}) => {
  const now = useNow(1000);

  const percentage = useMemo(() => calculatePercentage(differenceInSeconds(end, start), differenceInSeconds(now, start)),
    [start, now, end]);

  const { formatTime } = useFormatter();

  return (
    <div>
      <Box display="flex">
        <Typography style={{ flex: 1 }}>{formatTime(start)}</Typography>
        <Typography>{formatTime(end)}</Typography>
      </Box>
      <WorkProgress startTime={start} endTime={end} lunchStartTime={lunchStart} lunchEndTime={lunchEnd} currentTime={now} />
      <BottomText marginLeft={`${percentage}%`}>
        <Typography>{formatTime(now)}</Typography>
      </BottomText>
      <Infos startTime={start} endTime={end} currentTime={now} lunchStartTime={lunchStart} lunchEndTime={lunchEnd} />
    </div>
  );
};

export default Stats;
