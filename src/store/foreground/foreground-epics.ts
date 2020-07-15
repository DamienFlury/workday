import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ForegroundAction } from './foreground-types';

export const foregroundEpic: Epic<ForegroundAction> = (action$) =>
  action$.pipe(
    ofType('SET_FOREGROUND'),
    mergeMap((action) => {
      localStorage.setItem('foreground', action.payload.foreground);
      return EMPTY;
    })
  );
