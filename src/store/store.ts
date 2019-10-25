import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { QuoteState } from './quote/types';
import { SettingsState } from './settings/types';
import { WeatherState, CHANGE_PERMISSION } from './weather/types';
import { fetchWeather } from './weather/actions';
import quote from './quote/reducer';
import settings from './settings/reducer';
import weather from './weather/reducer';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface StoreState {
  readonly quote: QuoteState,
  readonly settings: SettingsState,
  readonly weather: WeatherState,
}
const rootReducer = combineReducers({
  quote,
  settings,
  weather,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const sanFrancisco = { latitude: 37.7749, longitude: -122.4194 };

if (navigator.permissions) {
  navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
    store.dispatch({ type: CHANGE_PERMISSION, permission: permissionStatus.state });
    if (permissionStatus.state === 'granted') {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        store.dispatch<any>(fetchWeather(latitude, longitude));
      });
    } else {
      const { latitude, longitude } = sanFrancisco;
      store.dispatch<any>(fetchWeather(latitude, longitude));
    }
    // eslint-disable-next-line no-param-reassign
    permissionStatus.onchange = (status) => {
      if (!status || !status.target) {
        return;
      }

      store.dispatch({ type: CHANGE_PERMISSION, permission: (status.target as any).state });
      if ((status.target as any).state === 'granted') {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          store.dispatch<any>(fetchWeather(latitude, longitude));
        });
      } else {
        const { latitude, longitude } = sanFrancisco;
        store.dispatch<any>(fetchWeather(latitude, longitude));
      }
    };
  });
} else {
  const { latitude, longitude } = sanFrancisco;
  store.dispatch<any>(fetchWeather(latitude, longitude));
}

export default store;
