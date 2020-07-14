import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import ForegroundProvider from './providers/ForegroundProvider';
import BackgroundProvider from './providers/BackgroundProvider';
import WeatherProvider from './providers/WeatherProvider';
import configureStore from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BackgroundProvider>
      <ForegroundProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </ForegroundProvider>
    </BackgroundProvider>
  </Provider>,
  document.getElementById('root')
);
