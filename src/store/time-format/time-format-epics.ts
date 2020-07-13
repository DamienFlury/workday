import { Observable } from 'redux';
import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { TimeFormatAction } from './time-format-types';

export const timeFormatEpic: Epic<TimeFormatAction> = (action$) =>
  action$.pipe(
    ofType('SET_TIME_FORMAT'),
    mergeMap((action) => {
      localStorage.setItem('time-format', action.payload.format);
      return action$;
    })
  );
