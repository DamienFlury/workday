import React, { useState } from "react";
import { Paper, Button, TextField, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Stats from "./Stats";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    margin: theme.spacing(5)
  }
}));
const Gohome = () => {
  const classes = useStyles();

  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

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
