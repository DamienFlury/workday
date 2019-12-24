import React, {
  createContext, useEffect, useState,
} from 'react';


type Weather = {
  name: string;
  main: {
    temp: number;
  };
  weather: [{
    description: string;
  }];
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

type WeatherState = {
  weather: Weather;
  permission: string;
}

const initialState: WeatherState = {
  weather: {
    name: '',
    main: {
      temp: 0,
    },
    weather: [{
      description: '',
    }],
    wind: {
      speed: 0,
    },
    sys: {
      sunrise: 0,
      sunset: 0,
    },
  },
  permission: 'prompt',
};

export const WeatherContext = createContext(initialState);

const sanFrancisco = { latitude: 37.7749, longitude: -122.4194 };
const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState(initialState.weather);

  const [permission, setPermission] = useState('prompt');

  navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
    setPermission(permissionStatus.state);
    // eslint-disable-next-line no-param-reassign
    permissionStatus.onchange = (status) => {
      setPermission((status as any).state);
    };
  });

  useEffect(() => {
    const fetchWeather = async ({ longitude, latitude }: { longitude: number; latitude: number}): Promise<void> => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          latitude
        }&lon=${longitude}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
      );
      const newWeather = await response.json();
      if (!newWeather.cod || (newWeather.cod >= 200 && newWeather.cod < 300)) {
        setWeather(newWeather);
      }
    };
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
        if (permissionStatus.state === 'granted') {
          navigator.geolocation.getCurrentPosition((pos) => {
            fetchWeather(pos.coords);
          });
        } else {
          fetchWeather(sanFrancisco);
        }
        // eslint-disable-next-line no-param-reassign
        permissionStatus.onchange = (status) => {
          if (!status || !status.target) {
            return;
          }
          if ((status.target as any).state === 'granted') {
            navigator.geolocation.getCurrentPosition((pos) => {
              fetchWeather(pos.coords);
            });
          } else {
            fetchWeather(sanFrancisco);
          }
        };
      });
    } else {
      fetchWeather(sanFrancisco);
    }
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, permission }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
