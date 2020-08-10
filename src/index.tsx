import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import WeatherProvider from './providers/WeatherProvider';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </Provider>,
  document.getElementById('root')
);
