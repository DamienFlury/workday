import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import WeatherProvider from './providers/WeatherProvider';
import configureStore from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </Provider>,
  document.getElementById('root')
);
