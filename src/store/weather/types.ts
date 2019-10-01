export const FETCH_WEATHER_PENDING = 'FETCH_WEATHER_PENDING';
export const FETCH_WEATHER_FULFILLED = 'FETCH_WEATHER_FULFILLED';
export const FETCH_WEATHER_REJECTED = 'FETCH_WEATHER_REJECTED';
export const CHANGE_PERMISSION = 'CHANGE_PERMISSION';

export interface Weather {
  readonly name: string,
  readonly main: {
    readonly temp: number,
  },
  readonly weather: [{
    readonly description: string
  }],
  wind: {
    readonly speed: number,
  },
  sys: {
    readonly sunrise: number,
    readonly sunset: number,
  }
}

export interface WeatherState {
  readonly status: string,
  readonly data?: Weather,
  readonly permission?: string,
  readonly error?: string,
}


export interface WeatherAction {
  readonly type: string,
  readonly weather?: Weather,
  readonly error?: string,
  readonly permission?: string,
}
