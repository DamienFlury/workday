import React, { useState } from 'react';
import './App.css';
import {
  MuiThemeProvider, createMuiTheme, CssBaseline,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Widgets from './components/Widgets/Widgets';
import Settings from './components/Settings';


function App() {
  const [showSettings, setShowSettings] = useState(false);

  const type = useSelector(state => state.settings.theme.type);

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
          <NavBar onClick={() => setShowSettings(prev => !prev)} />
          {showSettings ? <Settings />
            : <Widgets />}
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
