import { WeatherAction, Permission } from './weather-types';

export const requestGeolocationPermissions = (): WeatherAction => ({
  type: 'WEATHER/REQUEST_GEOLOCATION_PERMISSIONS',
});

export const setGeolocationPermissions = (
  permission: Permission
): WeatherAction => ({
  type: 'WEATHER/SET_GEOLOCATION_PERMISSIONS',
  payload: {
    permission,
  },
});
