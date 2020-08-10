import { Weather, Permission, WeatherAction } from './weather-types';

type Status = 'idle' | 'loadingPermissions';

type State = {
  weather: Weather;
  permission: Permission;
  status: Status;
};

const initialState: State = {
  weather: {
    name: '',
    main: {
      temp: 0,
    },
    weather: [
      {
        description: '',
      },
    ],
    wind: {
      speed: 0,
    },
    sys: {
      sunrise: 0,
      sunset: 0,
    },
  },
  permission: 'prompt',
  status: 'idle',
};

export const WeatherReducer = (
  state: State = initialState,
  action: WeatherAction
): State => {
  switch (action.type) {
    case 'WEATHER/REQUEST_GEOLOCATION_PERMISSIONS':
      return { ...state, status: 'loadingPermissions' };
    case 'WEATHER/SET_GEOLOCATION_PERMISSIONS':
      return {
        ...state,
        permission: action.payload.permission,
        status: 'idle',
      };
    default:
      return state;
  }
};
