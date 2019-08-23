import React, { useState, useEffect } from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import moment from 'moment';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import Stats from '../stats/Stats';

const Gohome = ({ className }) => {
  const [startTime, setStartTime] = useState(moment(localStorage.getItem('startTime') || '09:00', 'HH:mm'));
  const [lunchStart, setLunchStart] = useState(moment(localStorage.getItem('lunchStart') || '12:00', 'HH:mm'));
  const [lunchEnd, setLunchEnd] = useState(moment(localStorage.getItem('lunchEnd') || '13:00', 'HH:mm'));
  const [endTime, setEndTime] = useState(moment(localStorage.getItem('endTime') || '17:00', 'HH:mm'));


  const timeFormat = useSelector(state => state.settings.timeFormat);

  const ampm = timeFormat === 'ampm' ? true : timeFormat === '24h' ? false : undefined;


  useEffect(() => {
    localStorage.setItem('startTime', startTime.format('HH:mm'));
  }, [startTime]);
  useEffect(() => {
    localStorage.setItem('endTime', endTime.format('HH:mm'));
  }, [endTime]);
  useEffect(() => {
    localStorage.setItem('lunchStart', lunchStart.format('HH:mm'));
  }, [lunchStart]);
  useEffect(() => {
    localStorage.setItem('lunchEnd', lunchEnd.format('HH:mm'));
  }, [lunchEnd]);

  return (
    <Widget className={className}>
      <Typography variant="h4" gutterBottom>Workday</Typography>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            variant="inline"
            label="Start"
            value={startTime}
            onChange={setStartTime}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            variant="inline"
            label="Lunch Start"
            inputProps={{ step: 300 }}
            value={lunchStart}
            onChange={setLunchStart}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            variant="inline"
            label="Lunch End"
            inputProps={{ step: 300 }}
            value={lunchEnd}
            onChange={setLunchEnd}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            variant="inline"
            label="End"
            inputProps={{ step: 300 }}
            value={endTime}
            onChange={setEndTime}
          />
        </Box>
      </MuiPickersUtilsProvider>
      <Box marginTop="50px">
        <Stats start={startTime} end={endTime} lunchStart={lunchStart} lunchEnd={lunchEnd} />
      </Box>
    </Widget>
  );
};

export default Gohome;
