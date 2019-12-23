import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import QuoteProvider from './providers/QuoteProvider';
import ForegroundProvider from './providers/ForegroundProvider';
import BackgroundProvider from './providers/BackgroundProvider';
import TimeFormatProvider from './providers/TimeFormatProvider';
import ThemeTypeProvider from './providers/ThemeTypeProvider';

ReactDOM.render(
  <Provider store={store}>
    <QuoteProvider>
      <ThemeTypeProvider>
        <BackgroundProvider>
          <ForegroundProvider>
            <TimeFormatProvider>
              <App />
            </TimeFormatProvider>
          </ForegroundProvider>
        </BackgroundProvider>
      </ThemeTypeProvider>
    </QuoteProvider>
  </Provider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
