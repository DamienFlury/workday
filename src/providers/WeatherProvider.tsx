import React, {
  createContext, useEffect, useState,
} from 'react';


type Weather = {
  name: string,
  main: {
    temp: number,
  },
  weather: [{
    description: string
  }],
  wind: {
    speed: number,
  },
  sys: {
    sunrise: number,
    sunset: number,
  }
}

const initialState: Weather = {
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
};

export const WeatherContext = createContext(initialState);

const sanFrancisco = { latitude: 37.7749, longitude: -122.4194 };
const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState(initialState);


  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            lat
          }&lon=${lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
        );
        const newWeather = await response.json();
        if (newWeather.code >= 200 && newWeather.code < 300) {
          setWeather(newWeather);
        }
      } catch {
        console.log('error');
      }
    };
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
        if (permissionStatus.state === 'granted') {
          navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            fetchWeather(latitude, longitude);
          });
        } else {
          const { latitude, longitude } = sanFrancisco;
          fetchWeather(latitude, longitude);
        }
        // eslint-disable-next-line no-param-reassign
        permissionStatus.onchange = (status) => {
          if (!status || !status.target) {
            return;
          }
          if ((status.target as any).state === 'granted') {
            navigator.geolocation.getCurrentPosition((pos) => {
              const { latitude, longitude } = pos.coords;
              fetchWeather(latitude, longitude);
            });
          } else {
            const { latitude, longitude } = sanFrancisco;
            fetchWeather(latitude, longitude);
          }
        };
      });
    } else {
      fetchWeather(sanFrancisco.latitude, sanFrancisco.longitude);
    }
  }, []);

  return (
    <WeatherContext.Provider value={weather}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
