import React, { useState, useEffect } from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import moment from 'moment';
import Widget from './Widget';

const Weather = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [now, setNow] = useState(moment());
  const [location, setLocation] = useState({
    lat: 47.3769,
    lon: 8.5417,
  });

  const setPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      });
    }
  };

  useEffect(() => {
    navigator.permissions.query({ name: 'geolocation' }).then((status) => {
      if (status.state === 'granted') {
        setPosition();
      }
    });
  },
  []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        location.lat
      }&lon=${location.lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
    )
      .then(res => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, [location]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNow(moment());
    }, 10000);
    return () => {
      clearTimeout(timeout);
    };
  }, [now]);

  return (
    <Widget>
      <Typography variant="h4" gutterBottom>
        Weather
        {' '}
        {data.name && `in ${data.name}`}
      </Typography>
      {isLoading || (
        <div>
          <Typography>
Temperature:
            {' '}
            {data.main.temp}
            {' '}
&#176;C
          </Typography>
          <Typography>
Description:
            {' '}
            {data.weather[0].description}
          </Typography>
          <Typography>
Windspeed:
            {' '}
            {data.wind.speed}
            {' '}
m/s
          </Typography>
          <Typography>
            Sunrise was
            {' '}
            {moment.duration(data.sys.sunrise * 1000 - now).humanize(true)}
          </Typography>
          <Typography>
            Sunset is
            {' '}
            {moment.duration(data.sys.sunset * 1000 - now).humanize(true)}
          </Typography>
        </div>
      )}
      <Box marginTop="20px">
        <Button variant="contained" onClick={setPosition}>Use current location</Button>
      </Box>
    </Widget>
  );
};

export default Weather;
