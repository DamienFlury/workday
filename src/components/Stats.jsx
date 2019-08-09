import React, { useState, useEffect } from "react";
import { LinearProgress, Typography, Box } from "@material-ui/core";

const Stats = ({ start, end }) => {
  const [startHours, startMinutes] = start.split(":");
  const startTime = {
    hours: Number(startHours),
    minutes: Number(startMinutes)
  };

  const [endHours, endMinutes] = end.split(":");
  const endTime = { hours: Number(endHours), minutes: Number(endMinutes) };

  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
  });

  const format = time => `${("0" + time.hours).slice(-2)}:${("0" + time.minutes).slice(-2)}`;

  const getPercentage = (start, now, end) => {
    console.log(start, now, end);
    const startAsDecimal = start.hours + start.minutes / 60;
    const nowAsDecimal = now.hours + now.minutes / 60;
    const endAsDecimal = end.hours + end.minutes / 60;
    console.log(startAsDecimal, nowAsDecimal, endAsDecimal);
    return (
      ((nowAsDecimal - startAsDecimal) / (endAsDecimal - startAsDecimal)) * 100
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTime({
        hours: new Date().getHours(),
        minutes: new Date().getMinutes()
      });
    }, 1000);
    return () => clearTimeout(timeout);
  }, [currentTime]);

  return (
    <div>
      <Box display="flex">
        <Typography style={{flex: 1}}>{format(startTime)}</Typography>
        <Typography>{format(endTime)}</Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={getPercentage(startTime, currentTime, endTime)}
      />
      <p
        style={{
          marginLeft: getPercentage(startTime, currentTime, endTime) + "%"
        }}
      >
        {format(currentTime)}
      </p>
    </div>
  );
};

export default Stats;
