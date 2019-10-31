import React, { useState, useEffect } from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import moment, { Moment } from 'moment';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useSelector } from 'react-redux';
import { parse, format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Widget from '../Widget';
import Stats from './Stats/Stats';
import { StoreState } from '../../../store/store';

interface IProps {
  readonly className?: string,
}

const Workday: React.FC<IProps> = ({ className }) => {
  const [startTime, setStartTime] = useState(parse(localStorage.getItem('startTime') || '09:00', 'HH:mm', new Date()));
  const [lunchStart, setLunchStart] = useState(parse(localStorage.getItem('lunchStart') || '12:00', 'HH:mm', new Date()));
  const [lunchEnd, setLunchEnd] = useState(parse(localStorage.getItem('lunchEnd') || '13:00', 'HH:mm', new Date()));
  const [endTime, setEndTime] = useState(parse(localStorage.getItem('endTime') || '17:00', 'HH:mm', new Date()));


  const timeFormat = useSelector((state: StoreState) => state.settings.timeFormat);

  const ampm = timeFormat === 'ampm' ? true : timeFormat === '24h' ? false : undefined;


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
      <Typography variant="h4" gutterBottom>Workday</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Start"
            value={startTime}
            onChange={t => setStartTime(t || new Date())}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Lunch Start"
            inputProps={{ step: 300 }}
            value={lunchStart}
            onChange={t => setLunchStart(t || new Date())}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Lunch End"
            inputProps={{ step: 300 }}
            value={lunchEnd}
            onChange={t => setLunchEnd(t || new Date())}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="End"
            inputProps={{ step: 300 }}
            value={endTime}
            onChange={t => setEndTime(t || new Date())}
          />
        </Box>
      </MuiPickersUtilsProvider>
      <Box marginTop="50px">
        <Stats start={startTime} end={endTime} lunchStart={lunchStart} lunchEnd={lunchEnd} />
      </Box>
    </Widget>
  );
};

export default Workday;
