import React, { useState, useEffect, useContext } from 'react';
import { Box, Typography } from '@material-ui/core';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { parse, format, isValid } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import styled from 'styled-components';
import Widget from '../Widget';
import Stats from './Stats/Stats';
import { TimeFormatContext } from '../../../providers/TimeFormatProvider';

type Props = {
  className?: string;
};

const ErrorMessage = styled.p`
  color: #dd0000;
`;

const Workday: React.FC<Props> = ({ className }) => {
  const [startTimeFieldValue, setStartTimeFieldValue] = useState<null | Date>(
    parse(localStorage.getItem('startTime') || '09:00', 'HH:mm', new Date())
  );
  const [lunchStartFieldValue, setLunchStartFieldValue] = useState<null | Date>(
    parse(localStorage.getItem('lunchStart') || '12:00', 'HH:mm', new Date())
  );
  const [lunchEndFieldValue, setLunchEndFieldValue] = useState<null | Date>(
    parse(localStorage.getItem('lunchEnd') || '13:00', 'HH:mm', new Date())
  );
  const [endTimeFieldValue, setEndTimeFieldValue] = useState<null | Date>(
    parse(localStorage.getItem('endTime') || '17:00', 'HH:mm', new Date())
  );

  const [startTime, setStartTime] = useState(startTimeFieldValue ?? new Date());
  const [lunchStart, setLunchStart] = useState(
    lunchStartFieldValue ?? new Date()
  );
  const [lunchEnd, setLunchEnd] = useState(lunchEndFieldValue ?? new Date());
  const [endTime, setEndTime] = useState(endTimeFieldValue ?? new Date());

  const { timeFormat } = useContext(TimeFormatContext);

  const ampm =
    timeFormat === 'ampm' ? true : timeFormat === '24h' ? false : undefined;

  useEffect(() => {
    if (isValid(startTimeFieldValue)) {
      setStartTime(startTimeFieldValue ?? new Date());
    }
  }, [startTimeFieldValue]);

  useEffect(() => {
    if (isValid(lunchStartFieldValue)) {
      setLunchStart(lunchStartFieldValue ?? new Date());
    }
  }, [lunchStartFieldValue]);

  useEffect(() => {
    if (isValid(lunchEndFieldValue)) {
      setLunchEnd(lunchEndFieldValue ?? new Date());
    }
  }, [lunchEndFieldValue]);

  useEffect(() => {
    if (isValid(endTimeFieldValue)) {
      setEndTime(endTimeFieldValue ?? new Date());
    }
  }, [endTimeFieldValue]);

  useEffect(() => {
    localStorage.setItem('startTime', format(startTime, 'HH:mm'));
  }, [startTime]);
  useEffect(() => {
    localStorage.setItem('endTime', format(endTime, 'HH:mm'));
  }, [endTime]);
  useEffect(() => {
    localStorage.setItem('lunchStart', format(lunchStart, 'HH:mm'));
  }, [lunchStart]);
  useEffect(() => {
    localStorage.setItem('lunchEnd', format(lunchEnd, 'HH:mm'));
  }, [lunchEnd]);

  return (
    <Widget className={className}>
      <Typography variant="h4" gutterBottom>
        Workday
      </Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Start"
            value={startTimeFieldValue}
            onChange={setStartTimeFieldValue}
          />
          {startTime > lunchStart && (
            <ErrorMessage>Start time must be before lunch.</ErrorMessage>
          )}
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Lunch Start"
            inputProps={{ step: 300 }}
            value={lunchStartFieldValue}
            onChange={setLunchStartFieldValue}
          />
          {lunchStart > lunchEnd && (
            <ErrorMessage>Lunch start must be before lunch end.</ErrorMessage>
          )}
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Lunch End"
            inputProps={{ step: 300 }}
            value={lunchEndFieldValue}
            onChange={setLunchEndFieldValue}
          />
          {lunchEnd > endTime && (
            <ErrorMessage>Lunch must be before going home.</ErrorMessage>
          )}
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="End"
            inputProps={{ step: 300 }}
            value={endTimeFieldValue}
            onChange={setEndTimeFieldValue}
          />
        </Box>
      </MuiPickersUtilsProvider>
      <Box marginTop="50px">
        <Stats
          start={startTime}
          end={endTime}
          lunchStart={lunchStart}
          lunchEnd={lunchEnd}
        />
      </Box>
    </Widget>
  );
};

export default Workday;
