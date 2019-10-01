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
