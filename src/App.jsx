import React, { useState } from 'react';
import './App.css';
import {
  MuiThemeProvider, createMuiTheme, CssBaseline, makeStyles,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import NavBar from './components/NavBar';
import Gohome from './components/Gohome';
import Weather from './components/Weather';

const useStyles = makeStyles({
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    margin: 20,
    gridGap: 20,
  },
  '@media(max-width: 900px)': {
    wrapper: {
      gridTemplateColumns: '1fr',
    },
  },
});

function App() {
  const classes = useStyles();
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
      <div className={classes.wrapper}>
        <Gohome />
        <Weather />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
