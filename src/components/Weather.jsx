import React from 'react';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import Widget from './Widget';
import useWeather from '../hooks/use-weather';
import useNow from '../hooks/use-now';
import { humanizeWithMinutes } from './stats/time-helpers';


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
            {humanizeWithMinutes(moment.duration(now - moment(weather.sys.sunrise, 'X')))}
            {' '}
ago.
          </Typography>
          <Typography>
            Sunset is in
            {' '}
            {humanizeWithMinutes(moment.duration(moment(weather.sys.sunset, 'X') - now))}
.
          </Typography>
        </div>
      )}
    </Widget>
  );
};

export default Weather;
