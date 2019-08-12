import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import Widget from './Widget';

const Weather = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Zurich&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206')
      .then(res => res.json()).then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <Widget>
      <Typography variant="h4" gutterBottom>
Weather
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
          {moment.duration(data.sys.sunrise * 1000 - moment()).humanize(true)}
        </Typography>
        <Typography>
          Sunset is
          {' '}
          {moment.duration(data.sys.sunset * 1000 - moment()).humanize(true)}
        </Typography>
      </div>
      )}

    </Widget>
  );
};

export default Weather;
