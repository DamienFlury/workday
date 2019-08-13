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
import Time from './components/Time';

const Grid = styled.div`
  display: grid;
  margin: 20px;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
  "time time"
  "gohome gohome"
  "weather weather"
  "quote quote";
  @media(min-width: 1024px) {
    grid-template-areas: "gohome time"
    "gohome weather"
    "gohome quote";
  }
`;

const StyledGohome = styled(Gohome)`
  grid-area: gohome;
`;
const StyledTime = styled(Time)`
  grid-area: time;
`;
const StyledWeather = styled(Weather)`
  grid-area: weather;
`;
const StyledQuote = styled(Quote)`
  grid-area: quote;
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
            <StyledTime />
            <StyledWeather />
            <StyledQuote />
          </Grid>
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
