import React, { useContext } from 'react';
import { Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import { fromUnixTime } from 'date-fns';
import Widget from './Widget';
import useNow from '../../hooks/use-now';
// import { humanizeWithMinutes } from '../../utils/time-helpers';
import { formatDistanceWithPrefix } from '../../utils/time-helpers';
import { WeatherContext } from '../../providers/WeatherProvider';

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

type Props = {
  readonly className?: string;
};

const Weather: React.FC<Props> = ({ className }) => {
  const now = useNow(10000);

  const { weather, permission } = useContext(WeatherContext);

  return (
    <Widget className={className}>
      {weather && (
        <>
          <Typography variant="h4" gutterBottom>
            Weather {weather.name && `in ${weather.name}`}
          </Typography>
          <div>
            <Typography>Temperature: {weather.main.temp} &#176;C</Typography>
            <Typography>
              Description: {weather.weather[0].description}
            </Typography>
            <Typography>Windspeed: {weather.wind.speed} m/s</Typography>
            <Typography>
              Sunrise{' '}
              {formatDistanceWithPrefix(
                now,
                fromUnixTime(weather.sys.sunrise),
                true
              )}
              .
            </Typography>
            <Typography>
              Sunset{' '}
              {formatDistanceWithPrefix(
                now,
                fromUnixTime(weather.sys.sunset),
                true
              )}
              .
            </Typography>
            {permission === 'granted' || (
              <StyledButton
                onClick={() =>
                  navigator.geolocation.getCurrentPosition(() => {
                    // do nothing, used to request permissions
                  })
                }
                variant="contained"
              >
                Use my location
              </StyledButton>
            )}
          </div>
        </>
      )}
    </Widget>
  );
};

export default Weather;
