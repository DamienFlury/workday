export type Weather = {
  name: string;
  main: {
    temp: number;
  };
  weather: [
    {
      description: string;
    }
  ];
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
};

export type Permission = 'prompt' | 'granted';

type RequestPermissionAction = {
  type: 'WEATHER/REQUEST_GEOLOCATION_PERMISSIONS';
};

type SetPermissionAction = {
  type: 'WEATHER/SET_GEOLOCATION_PERMISSIONS';
  payload: {
    permission: Permission;
  };
};

export type WeatherAction = RequestPermissionAction | SetPermissionAction;
