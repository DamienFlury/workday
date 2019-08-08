import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import Gohome from './components/Gohome';

function App() {
  const [type, setType] = useState('dark');
  const theme = createMuiTheme({
    palette: {
      type
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar onClick={() => setType(prev => prev === 'light' ? 'dark' : 'light')} />
      <Gohome />
    </MuiThemeProvider>
  );
}

export default App;
