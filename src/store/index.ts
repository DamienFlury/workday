import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { timeFormatReducer } from './time-format/time-format-reducers';
import { timeFormatEpic } from './time-format/time-format-epics';
import { quoteReducer } from './quote/quote-reducers';
import { quoteEpic } from './quote/quote-epics';
import { themeReducer } from './theme/theme-reducers';
import { TimeFormat } from './time-format/time-format-types';
import { ThemeType } from './theme/theme-types';
import { themeTypeEpic } from './theme/theme-epics';
import { backgroundReducer } from './background/background-reducers';
import { backgroundEpic } from './background/background-epics';
import { Background } from './background/background-types';
import { foregroundReducer } from './foreground/foreground-reducers';
import { foregroundEpic } from './foreground/foreground-epics';

const rootReducer = combineReducers({
  timeFormat: timeFormatReducer,
  quote: quoteReducer,
  theme: themeReducer,
  background: backgroundReducer,
  foreground: foregroundReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;

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
  quoteEpic,
  themeTypeEpic,
  backgroundEpic,
  foregroundEpic
);

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {
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
    composeEnhancers(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic as any);

  return store;
};

export default configureStore;
