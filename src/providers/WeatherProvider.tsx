import React, { useReducer, createContext, useEffect } from 'react';


const initialState: [any, (lat: number, lon: number) => Promise<void>] = [{ status: 'initial', permission: 'prompt' }, async () => {}];

export const WeatherContext = createContext(initialState);

const WeatherProvider: React.FC = ({ children }) => {
  const [weather, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case 'FETCH_WEATHER_PENDING':
        return { ...state, status: 'pending' };
      case 'FETCH_WEATHER_FULFILLED':
        return { ...state, status: 'success', data: action.weather };
      case 'FETCH_WEATHER_REJECTED':
        return { ...state, status: 'error', error: action.error };
      case 'CHANGE_PERMISSION':
        return { ...state, permission: action.permission };
      default:
        return state;
    }
  }, initialState);

  const fetchWeather = async (lat: number, lon: number) => {
    dispatch({ type: 'FETCH_WEATHER_PENDING' });
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          lat
        }&lon=${lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
      );
      const newWeather = await response.json();
      dispatch({ type: 'FETCH_WEATHER_FULFILLED', weather: newWeather });
    } catch (error) {
      dispatch({ type: 'FETCH_WEATHER_REJECTED', error });
    }
  };

  const sanFrancisco = { latitude: 37.7749, longitude: -122.4194 };


  useEffect(() => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
        dispatch({ type: 'CHANGE_PERMISSION', permission: permissionStatus.state });
        if (permissionStatus.state === 'granted') {
          navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude } = pos.coords;
            dispatch(fetchWeather(latitude, longitude));
          });
        } else {
          const { latitude, longitude } = sanFrancisco;
          dispatch(fetchWeather(latitude, longitude));
        }
        // eslint-disable-next-line no-param-reassign
        permissionStatus.onchange = (status) => {
          if (!status || !status.target) {
            return;
          }

          dispatch({ type: 'CHANGE_PERMISSION', permission: (status.target as any).state });
          if ((status.target as any).state === 'granted') {
            navigator.geolocation.getCurrentPosition((pos) => {
              const { latitude, longitude } = pos.coords;
              dispatch(fetchWeather(latitude, longitude));
            });
          } else {
            const { latitude, longitude } = sanFrancisco;
            dispatch(fetchWeather(latitude, longitude));
          }
        };
      });
    } else {
      const { latitude, longitude } = sanFrancisco;
      dispatch(fetchWeather(latitude, longitude));
    }
  }, [sanFrancisco]);

  return (
    <WeatherContext.Provider value={[weather, fetchWeather]}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
