import React, { useState } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import NavBar from './components/NavBar';
import Gohome from './components/Gohome';

function App() {
  const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const [type, setType] = useState(prefersDarkTheme.matches ? 'dark' : 'light');
  prefersDarkTheme.onchange = () => {
    setType(prefersDarkTheme.matches ? 'dark' : 'light');
  };
  const theme = createMuiTheme({
    palette: {
      type,
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar onClick={() => setType(prev => (prev === 'light' ? 'dark' : 'light'))} />
      <Gohome />
    </MuiThemeProvider>
  );
}

export default App;
