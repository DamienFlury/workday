import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import Widget from './Widget';
import useWeather from '../hooks/use-weather';
import useNow from '../hooks/use-now';


const Weather = ({ className }) => {
  const now = useNow(10000);
  const { weather, isLoading } = useWeather();

  return (
    <Widget className={className}>
      <Typography variant="h4" gutterBottom>
        Weather
        {' '}
        {weather.name && `in ${weather.name}`}
      </Typography>
      {isLoading || (
        <div>
          <Typography>
Temperature:
            {' '}
            {weather.main.temp}
            {' '}
&#176;C
          </Typography>
          <Typography>
Description:
            {' '}
            {weather.weather[0].description}
          </Typography>
          <Typography>
Windspeed:
            {' '}
            {weather.wind.speed}
            {' '}
m/s
          </Typography>
          <Typography>
            Sunrise was
            {' '}
            {moment.duration(weather.sys.sunrise * 1000 - now).humanize(true)}
          </Typography>
          <Typography>
            Sunset is
            {' '}
            {moment.duration(weather.sys.sunset * 1000 - now).humanize(true)}
          </Typography>
        </div>
      )}
    </Widget>
  );
};

export default Weather;
