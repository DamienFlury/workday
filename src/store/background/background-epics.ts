import { Epic, ofType } from 'redux-observable';
import { mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { BackgroundAction } from './background-types';

export const backgroundEpic: Epic<BackgroundAction> = (action$) =>
  action$.pipe(
    ofType('SET_BACKGROUND'),
    mergeMap((action) => {
      localStorage.setItem('background', action.payload.background);
      return EMPTY;
    })
  );
