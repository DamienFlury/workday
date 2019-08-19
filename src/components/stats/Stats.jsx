import React, { useMemo } from 'react';
import { Typography, Box } from '@material-ui/core';
import moment from 'moment';
import styled from 'styled-components';
import { calculatePercentage } from './time-helpers';
import Infos from './Infos';
import WorkProgress from './WorkProgress';
import useNow from '../../hooks/use-now';

const BottomText = styled.div`
  display: inline-block;
  width: auto;
  margin-left: ${props => props.marginLeft};
  transform: translateX(-50%);
  margin-top: 2px;
  margin-bottom: 20px;
`;

const Stats = ({
  start, end, lunchStart, lunchEnd,
}) => {
  const startTime = moment(start, 'HH:mm');
  const endTime = moment(end, 'HH:mm');
  const lunchStartTime = moment(lunchStart, 'HH:mm');
  const lunchEndTime = moment(lunchEnd, 'HH:mm');

  const now = useNow(1000);

  const percentage = useMemo(() => calculatePercentage(endTime - startTime, now - startTime),
    [startTime, now, endTime]);

  return (
    <div>
      <Box display="flex">
        <Typography style={{ flex: 1 }}>{startTime.format('HH:mm')}</Typography>
        <Typography>{endTime.format('HH:mm')}</Typography>
      </Box>
      <WorkProgress startTime={startTime} endTime={endTime} lunchStartTime={lunchStartTime} lunchEndTime={lunchEndTime} currentTime={now} />
      <BottomText marginLeft={`${percentage}%`}>
        <Typography>{now.format('HH:mm')}</Typography>
      </BottomText>
      <Infos startTime={startTime} endTime={endTime} currentTime={now} lunchStartTime={lunchStartTime} lunchEndTime={lunchEndTime} />
    </div>
  );
};

export default Stats;
