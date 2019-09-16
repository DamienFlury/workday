import { ThunkDispatch, ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED';
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED';
export const CHANGE_PERMISSION = 'CHANGE_PERMISSION';

export interface Weather {
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

export interface WeatherState {
  status: string,
  data?: Weather,
  permission?: string,
  error?: string,
}


export interface WeatherAction {
  type: string,
  weather?: Weather,
  error?: string,
  permission?: string,
}


const fetchWeather = (lat: number, lon: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => async (dispatch: ThunkDispatch<{}, {}, WeatherAction>) => {
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

export default fetchWeather;
