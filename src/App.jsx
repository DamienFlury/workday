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


function App() {
  const [showSettings, setShowSettings] = useState(false);

  const type = useSelector(state => state.settings.theme.type);
  const [themeType, setThemeType] = useState(type);

  useEffect(() => {
    if (type === 'default' && window && window.matchMedia) {
      const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
      setThemeType(prefersDarkTheme.matches ? 'dark' : 'light');
      prefersDarkTheme.onchange = () => {
        setThemeType(prefersDarkTheme.matches ? 'dark' : 'light');
      };
    }
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: themeType === 'default' ? 'dark' : themeType,
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
