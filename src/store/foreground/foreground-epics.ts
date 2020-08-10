import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { foregroundSlice } from './foreground-slice';

export const foregroundEpic: Epic = (action$) =>
  action$.pipe(
    ofType(foregroundSlice.actions.set.type),
    mergeMap((action) => {
      localStorage.setItem('foreground', action.payload);
      return EMPTY;
    })
  );
