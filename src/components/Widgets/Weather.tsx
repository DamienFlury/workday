import React from 'react';
import { Typography, Button } from '@material-ui/core';
import moment from 'moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { differenceInSeconds } from 'date-fns/esm';
import { fromUnixTime } from 'date-fns';
import Widget from './Widget';
import useNow from '../../hooks/use-now';
import { humanizeWithMinutes } from '../../utils/time-helpers';
import { StoreState } from '../../store/store';

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

interface IProps {
  readonly className?: string,
}

const Weather: React.FC<IProps> = ({ className }) => {
  const now = useNow(10000);

  const weather = useSelector((state: StoreState) => state.weather.data);
  const status = useSelector((state: StoreState) => state.weather.status);
  const permission = useSelector((state: StoreState) => state.weather.permission);

  return (
    <Widget className={className}>
      {weather && (
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
              {differenceInSeconds(now, fromUnixTime(weather.sys.sunrise))}
              {' '}
ago.
            </Typography>
            <Typography>
            Sunset is in
              {' '}
              {humanizeWithMinutes(moment.duration(moment(weather.sys.sunset, 'X').diff(now)))}
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
