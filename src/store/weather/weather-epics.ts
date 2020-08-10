import { Epic, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { WeatherAction, Permission } from './weather-types';
import { setGeolocationPermissions } from './weather-actions';

const getPermissions = new Observable<Permission>((subscriber) => {
  navigator.permissions
    .query({ name: 'geolocation' })
    .then((permissionStatus) => {
      subscriber.next(permissionStatus.state as Permission);
      // eslint-disable-next-line no-param-reassign
      permissionStatus.onchange = (status) => {
        subscriber.next((status as any).state);
      };
    });
});

export const requestGeolocationEpic: Epic<WeatherAction> = (action$) =>
  action$.pipe(
    ofType('WEATHER/REQUEST_GEOLOCATION_PERMISSIONS'),
    switchMap(() =>
      getPermissions.pipe(
        map((response) => setGeolocationPermissions(response))
      )
    )
  );
