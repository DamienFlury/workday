import React, { useState, useEffect } from 'react';
import './App.css';
import {
  MuiThemeProvider, createMuiTheme, CssBaseline,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { StylesProvider } from '@material-ui/styles';
import NavBar from './components/NavBar';
import Widgets from './components/Widgets/Widgets';
import Settings from './components/Settings';
import { StoreState } from './store/store';
import { ThemeType } from './store/actions/settings-actions';



const App: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  const type = useSelector((state: StoreState) => state.settings.theme.type as ThemeType);

  let themeType = type;
  
  useEffect(() => {
    if (!type && window && window.matchMedia) {
      console.log('o.O')
      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
      themeType = (prefersDarkTheme.matches ? 'dark' : 'light');
      prefersDarkTheme.onchange = () => {
        themeType = (prefersDarkTheme.matches ? 'dark' : 'light');
      };
    }
  }, [type]);
  
  const theme = createMuiTheme({
    palette: {
      type: themeType === 'default' ? undefined : themeType,
      primary: blue,
    },
  });

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <>
            <CssBaseline />
            <NavBar onClick={() => setShowSettings(prev => !prev)} />
            {showSettings ? <Settings />
              : <Widgets />}
          </>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
