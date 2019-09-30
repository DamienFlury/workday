import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import moment from 'moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Widget from './Widget';
import useNow from '../../hooks/use-now';
import { humanizeWithMinutes } from '../../utils/time-helpers';
import { StoreState } from '../../store/store';
import { WeatherContext } from '../../providers/WeatherProvider';

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

interface IProps {
  className?: string,
}

const Weather: React.FC<IProps> = ({ className }) => {
  const now = useNow(10000);


  const [{ data, status, permission }] = useContext(WeatherContext);


  return (
    <Widget className={className}>
      {data && (
      <>
        <Typography variant="h4" gutterBottom>
        Weather
          {' '}
          {data.name && `in ${data.name}`}
        </Typography>
        {status === 'success' && (
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
            {humanizeWithMinutes(moment.duration(now.diff(moment(data.sys.sunrise, 'X'))))}
            {' '}
ago.
          </Typography>
          <Typography>
            Sunset is in
            {' '}
            {humanizeWithMinutes(moment.duration(moment(data.sys.sunset, 'X').diff(now)))}
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
      )}
    </Widget>
  );
};

export default Weather;
