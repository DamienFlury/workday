import { Epic, ofType } from 'redux-observable';
import { mergeMap, ignoreElements } from 'rxjs/operators';
import { ThemeAction } from './theme-types';

export const themeTypeEpic: Epic<ThemeAction> = (action$) =>
  action$.pipe(
    ofType('SET_THEME_TYPE'),
    mergeMap((action) => {
      localStorage.setItem('theme-type', action.payload.type);
      return action$;
    }),
    ignoreElements()
  );
