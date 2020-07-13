import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import QuoteProvider from './providers/QuoteProvider';
import ForegroundProvider from './providers/ForegroundProvider';
import BackgroundProvider from './providers/BackgroundProvider';
import ThemeTypeProvider from './providers/ThemeTypeProvider';
import WeatherProvider from './providers/WeatherProvider';
import configureStore from './store';

ReactDOM.render(
  <Provider store={configureStore()}>
    <QuoteProvider>
      <ThemeTypeProvider>
        <BackgroundProvider>
          <ForegroundProvider>
            <WeatherProvider>
              <App />
            </WeatherProvider>
          </ForegroundProvider>
        </BackgroundProvider>
      </ThemeTypeProvider>
    </QuoteProvider>
  </Provider>,
  document.getElementById('root')
);
