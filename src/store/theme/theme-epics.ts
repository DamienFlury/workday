import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { themeSlice } from './theme-slices';

export const themeTypeEpic: Epic = (action$) =>
  action$.pipe(
    ofType(themeSlice.actions.set.type),
    mergeMap((action) => {
      localStorage.setItem('theme-type', action.payload);
      return EMPTY;
    })
  );
