import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import settings from './reducers/settings-reducer';
import weather from './reducers/weather-reducer';
import quote from './reducers/quote-reducer';
import fetchWeather, { CHANGE_PERMISSION } from './actions/weather-actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  settings,
  weather,
  quote,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const sanFrancisco = { latitude: 37.7749, longitude: -122.4194 };


navigator.permissions.query({ name: 'geolocation' }).then((permissionStatus) => {
  store.dispatch({ type: CHANGE_PERMISSION, permission: permissionStatus.state });
  if (permissionStatus.state === 'granted') {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      store.dispatch(fetchWeather(latitude, longitude));
    });
  } else {
    const { latitude, longitude } = sanFrancisco;
    store.dispatch(fetchWeather(latitude, longitude));
  }
  // eslint-disable-next-line no-param-reassign
  permissionStatus.onchange = (status) => {
    store.dispatch({ type: CHANGE_PERMISSION, permission: status.target.state });
    if (status.target.state === 'granted') {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        store.dispatch(fetchWeather(latitude, longitude));
      });
    } else {
      const { latitude, longitude } = sanFrancisco;
      store.dispatch(fetchWeather(latitude, longitude));
    }
  };
});

export default store;
