import React from 'react';
import { Typography, Button } from '@material-ui/core';
import moment from 'moment';
import styled from 'styled-components';
import Widget from './Widget';
import useWeather from '../../hooks/use-weather';
import useNow from '../../hooks/use-now';
import { humanizeWithMinutes } from '../stats/time-helpers';

const StyledButton = styled(Button)`
  margin-top: 20px !important;
`;

const Weather = ({ className }) => {
  const now = useNow(10000);
  const {
    weather, isLoading, permissionState,
  } = useWeather();

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
          {permissionState === 'prompt' && <StyledButton onClick={() => { navigator.geolocation.getCurrentPosition(() => {}); }} variant="contained">Use my location</StyledButton>}
        </div>
      )}
    </Widget>
  );
};

export default Weather;
