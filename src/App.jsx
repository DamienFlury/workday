import React, { useState } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import NavBar from './components/NavBar';
import Gohome from './components/Gohome';
import Weather from './components/Weather';

function App() {
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [type, setType] = useState(prefersDarkTheme.matches ? 'dark' : 'light');
  prefersDarkTheme.onchange = () => {
    setType(prefersDarkTheme.matches ? 'dark' : 'light');
  };
  const theme = createMuiTheme({
    palette: {
      type,
      primary: blue,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar onClick={() => setType(prev => (prev === 'light' ? 'dark' : 'light'))} />
      <Gohome />
      <Weather />
    </MuiThemeProvider>
  );
}

export default App;
