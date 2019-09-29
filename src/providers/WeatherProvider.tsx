import React, { useReducer, createContext } from 'react';
import { WeatherState, WeatherAction, FETCH_WEATHER_PENDING, FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED, CHANGE_PERMISSION } from '../store/actions/weather-actions';

const initialState: [WeatherState, (lat: number, lon: number) => Promise<void>] = [{ status: 'initial', permission: 'prompt' }, async() => {}] ;

export const WeatherContext = createContext(initialState);

const WeatherProvider: React.FC = ({ children }) => {

    const [weather, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case FETCH_WEATHER_PENDING:
                return { ...state, status: 'pending' };
            case FETCH_WEATHER_FULFILLED:
                return { ...state, status: 'success', data: action.weather };
            case FETCH_WEATHER_REJECTED:
                return { ...state, status: 'error', error: action.error };
            case CHANGE_PERMISSION:
                return { ...state, permission: action.permission };
            default:
                return state;
        }
    }, initialState);

    const fetchWeather = async(lat: number, lon: number) => {
        dispatch({ type: FETCH_WEATHER_PENDING });
        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${
              lat
            }&lon=${lon}&units=metric&APPID=64bc522c0dff1a806fad66f6e0069206`,
          );
          const weather = await response.json();
          dispatch({ type: FETCH_WEATHER_FULFILLED, weather });
        } catch (error) {
          dispatch({ type: FETCH_WEATHER_REJECTED, error });
        }
      };

    return (
        <WeatherContext.Provider value={[weather, fetchWeather]}>
            {children}
        </WeatherContext.Provider>
    )

}

export default WeatherProvider;