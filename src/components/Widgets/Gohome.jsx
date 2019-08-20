import React, { useState, useEffect } from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import moment from 'moment';
import {
  TimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Widget from './Widget';
import Stats from '../stats/Stats';

const Gohome = ({ className }) => {
  const [startTime, setStartTime] = useState(moment('09:00', 'HH:mm'));
  const [endTime, setEndTime] = useState(moment('17:00', 'HH:mm'));
  const [lunchStart, setLunchStart] = useState(moment('12:00', 'HH:mm'));
  const [lunchEnd, setLunchEnd] = useState(moment('13:00', 'HH:mm'));


  useEffect(() => {
    localStorage.setItem('startTime', startTime);
  }, [startTime]);
  useEffect(() => {
    localStorage.setItem('endTime', endTime);
  }, [endTime]);
  useEffect(() => {
    localStorage.setItem('lunchStart', lunchStart);
  }, [lunchStart]);
  useEffect(() => {
    localStorage.setItem('lunchEnd', lunchEnd);
  }, [lunchEnd]);

  return (
    <Widget className={className}>
      <Typography variant="h4" gutterBottom>Workday</Typography>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Box margin="20px">
          <TimePicker
            label="Start"
            value={startTime}
            onChange={setStartTime}
          />
        </Box>
        <Box margin="20px">
          <TimePicker
            label="Lunch Start"
            inputProps={{ step: 300 }}
            value={lunchStart}
            onChange={setLunchStart}
          />
        </Box>
        <Box margin="20px">
          <TimePicker
            label="Lunch End"
            inputProps={{ step: 300 }}
            value={lunchEnd}
            onChange={setLunchEnd}
          />
        </Box>
        <Box margin="20px">
          <TimePicker
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
