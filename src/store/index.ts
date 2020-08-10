import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { timeFormatEpic } from './time-format/time-format-epics';
import { TimeFormat } from './time-format/time-format-types';
import { ThemeType } from './theme/theme-types';
import { themeTypeEpic } from './theme/theme-epics';
import { backgroundEpic } from './background/background-epics';
import { Background } from './background/background-types';
import { foregroundEpic } from './foreground/foreground-epics';
import timeFormatSlice from './time-format/time-format-slices';
import { themeSlice } from './theme/theme-slices';
import { backgroundSlice } from './background/background-slices';
import { foregroundSlice } from './foreground/foreground-slice';
import { quoteSlice } from './quote/quote-slices';

const getInitialTimeFormat = (): TimeFormat => {
  const fromLocalStorage = localStorage.getItem('time-format');
  return fromLocalStorage === '24h' || fromLocalStorage === 'ampm'
    ? fromLocalStorage
    : 'default';
};

const getInitialTheme = (): ThemeType => {
  const fromLocalStorage = localStorage.getItem('theme-type');
  return fromLocalStorage === 'light' || fromLocalStorage === 'dark'
    ? fromLocalStorage
    : 'default';
};

const getInitialBackground = (): Background => {
  const fromLocalStorage = localStorage.getItem('background');

  return fromLocalStorage === 'dark' ||
    fromLocalStorage === 'light' ||
    fromLocalStorage === 'image'
    ? fromLocalStorage
    : 'default';
};

const getInitialForeground = () => {
  const fromLocalStorage = localStorage.getItem('foreground');
  return fromLocalStorage === 'transparent' ? fromLocalStorage : 'default';
};

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(
  timeFormatEpic,
  themeTypeEpic,
  backgroundEpic,
  foregroundEpic
);

const store = configureStore({
  reducer: {
    timeFormat: timeFormatSlice.reducer,
    quote: quoteSlice.reducer,
    theme: themeSlice.reducer,
    background: backgroundSlice.reducer,
    foreground: foregroundSlice.reducer,
  },
  preloadedState: {
    timeFormat: {
      format: getInitialTimeFormat(),
    },
    theme: {
      type: getInitialTheme(),
    },
    background: {
      background: getInitialBackground(),
    },
    foreground: {
      foreground: getInitialForeground(),
    },
  },
  middleware: getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic as any);

export type StoreState = ReturnType<typeof store.getState>;

export default store;
