import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import Widget from './Widget';
import useWeather from '../hooks/use-weather';


const Weather = () => {
  const [now, setNow] = useState(moment());
  const [data, isLoading] = useWeather();

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
    </Widget>
  );
};

export default Weather;
