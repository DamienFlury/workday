import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { backgroundSlice } from './background-slices';

export const backgroundEpic: Epic = (action$) =>
  action$.pipe(
    ofType(backgroundSlice.actions.set.type),
    mergeMap((action) => {
      localStorage.setItem('background', action.payload);
      return EMPTY;
    })
  );
