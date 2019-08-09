import React, { useState, useEffect } from 'react';
import {
  Paper, TextField, Box, makeStyles,
} from '@material-ui/core';
import Stats from './stats/Stats';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    margin: theme.spacing(5),
  },
}));
const Gohome = () => {
  const classes = useStyles();

  const [startTime, setStartTime] = useState(localStorage.getItem('startTime') || '09:00');
  const [endTime, setEndTime] = useState(localStorage.getItem('endTime') || '17:00');


  useEffect(() => {
    localStorage.setItem('startTime', startTime);
  }, [startTime]);
  useEffect(() => {
    localStorage.setItem('endTime', endTime);
  }, [endTime]);

  return (
    <Paper className={classes.paper}>
      <Box margin="20px">
        <TextField
          label="Start"
          type="time"
          inputProps={{ step: 300 }}
          value={startTime}
          onChange={e => setStartTime(e.target.value)}
        />
      </Box>
      <Box margin="20px">
        <TextField
          type="time"
          label="End"
          inputProps={{ step: 300 }}
          value={endTime}
          onChange={e => setEndTime(e.target.value)}
        />
      </Box>
      <Box marginTop="50px">
        <Stats start={startTime} end={endTime} />
      </Box>
    </Paper>
  );
};

export default Gohome;
