import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { ThemeAction } from './theme-types';

export const themeTypeEpic: Epic<ThemeAction> = (action$) =>
  action$.pipe(
    ofType('SET_THEME_TYPE'),
    mergeMap((action) => {
      localStorage.setItem('theme-type', action.payload.type);
      return EMPTY;
    })
  );
