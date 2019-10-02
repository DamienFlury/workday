import React, { useState, useEffect } from 'react';
import {
  Box, Typography,
} from '@material-ui/core';
import moment, { Moment } from 'moment';
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { useSelector } from 'react-redux';
import Widget from '../Widget';
import Stats from './Stats/Stats';
import { StoreState } from '../../../store/store';

interface IProps {
  className?: string,
}

const Workday: React.FC<IProps> = ({ className }) => {
  const [startTime, setStartTime] = useState<Moment>(moment(localStorage.getItem('startTime') || '09:00', 'HH:mm'));
  const [lunchStart, setLunchStart] = useState<Moment>(moment(localStorage.getItem('lunchStart') || '12:00', 'HH:mm'));
  const [lunchEnd, setLunchEnd] = useState<Moment>(moment(localStorage.getItem('lunchEnd') || '13:00', 'HH:mm'));
  const [endTime, setEndTime] = useState<Moment>(moment(localStorage.getItem('endTime') || '17:00', 'HH:mm'));


  const timeFormat = useSelector((state: StoreState) => state.settings.timeFormat);

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
            label="Start"
            value={startTime}
            onChange={t => setStartTime(t || moment())}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Lunch Start"
            inputProps={{ step: 300 }}
            value={lunchStart}
            onChange={t => setLunchStart(t || moment())}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="Lunch End"
            inputProps={{ step: 300 }}
            value={lunchEnd}
            onChange={t => setLunchEnd(t || moment())}
          />
        </Box>
        <Box margin="20px">
          <KeyboardTimePicker
            ampm={ampm}
            label="End"
            inputProps={{ step: 300 }}
            value={endTime}
            onChange={t => setEndTime(t || moment())}
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
