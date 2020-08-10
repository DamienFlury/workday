import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import timeFormatSlice from './time-format-slices';

export const timeFormatEpic: Epic = (action$) =>
  action$.pipe(
    ofType(timeFormatSlice.actions.set.type),
    mergeMap((action) => {
      localStorage.setItem('time-format', action.payload);
      return EMPTY;
    })
  );
