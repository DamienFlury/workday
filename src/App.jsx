import React, { useState } from 'react';
import './App.css';
import {
  MuiThemeProvider, createMuiTheme, CssBaseline,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Widgets from './components/Widgets/Widgets';


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
      <ThemeProvider theme={theme}>
        <>
          <CssBaseline />
          <NavBar onClick={() => setType(prev => (prev === 'light' ? 'dark' : 'light'))} />
          <Widgets />
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
