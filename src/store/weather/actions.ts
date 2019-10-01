import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import {
  FETCH_WEATHER_PENDING, FETCH_WEATHER_FULFILLED, FETCH_WEATHER_REJECTED, WeatherAction,
} from './types';


export const fetchWeather = (lat: number, lon: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, WeatherAction>) => {
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
