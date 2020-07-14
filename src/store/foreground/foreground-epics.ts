import { Epic, ofType } from 'redux-observable';
import { mergeMap, ignoreElements } from 'rxjs/operators';
import { ForegroundAction } from './foreground-types';

export const foregroundEpic: Epic<ForegroundAction> = (action$) =>
  action$.pipe(
    ofType('SET_FOREGROUND'),
    mergeMap((action) => {
      localStorage.setItem('foreground', action.payload.foreground);
      return action$;
    }),
    ignoreElements()
  );
