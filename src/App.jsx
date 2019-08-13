import React, { useState } from 'react';
import './App.css';
import {
  MuiThemeProvider, createMuiTheme, CssBaseline,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import Gohome from './components/Gohome';
import Weather from './components/Weather';
import Quote from './components/Quote';

const Grid = styled.div`
  display: grid;
  margin: 20px;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "gohome gohome"
  "weather weather";
  @media(min-width: 1024px) {
    grid-template-areas: "gohome weather"
    "gohome lol";
  }
`;

const StyledGohome = styled(Gohome)`
  grid-area: gohome;
`;
const StyledWeather = styled(Weather)`
  grid-area: weather;
`;

const StyledQuote = styled(Quote)`
  grid-area: lol;
`;

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
          <Grid>
            <StyledGohome />
            <StyledWeather />
            <StyledQuote />
          </Grid>
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
