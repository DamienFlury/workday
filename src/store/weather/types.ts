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
  readonly status: 'pending' | 'success' | 'error' | 'initial',
  readonly data?: Weather,
  readonly permission?: string,
  readonly error?: string,
}


interface FetchWeatherPendingAction {
  readonly type: typeof FETCH_WEATHER_PENDING,
}

interface FetchWeatherFulfilledAction {
  readonly type: typeof FETCH_WEATHER_FULFILLED,
  readonly weather: Weather,
}

interface FetchWeatherRejectedAction {
  readonly type: typeof FETCH_WEATHER_REJECTED,
  readonly error: string,
}

interface ChangePermissionAction {
  readonly type: typeof CHANGE_PERMISSION,
  readonly permission: string,
}


export type WeatherAction = FetchWeatherPendingAction
  | FetchWeatherFulfilledAction
  | FetchWeatherRejectedAction
  | ChangePermissionAction
