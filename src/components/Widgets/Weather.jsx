import React from 'react';
import { Typography, Button } from '@material-ui/core';
import moment from 'moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import useNow from '../../hooks/use-now';
import { humanizeWithMinutes } from '../stats/time-helpers';

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const Weather = ({ className }) => {
  const now = useNow(10000);
  const weather = useSelector(state => state.weather.data);
  const status = useSelector(state => state.weather.status);
  const permission = useSelector(state => state.weather.permission);

  return (
    <Widget className={className}>
      <>
        <Typography variant="h4" gutterBottom>
        Weather
          {' '}
          {weather.name && `in ${weather.name}`}
        </Typography>
        {status === 'success' && (
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
          {permission === 'granted'
          || (
          <StyledButton
            onClick={() => navigator.geolocation.getCurrentPosition(() => {})}
            variant="contained"
          >
Use my location

          </StyledButton>
          )
          }
        </div>
        )}
      </>
    </Widget>
  );
};

export default Weather;
