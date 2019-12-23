import React, { useState, useContext } from 'react';
import {
  MuiThemeProvider, createMuiTheme, CssBaseline,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import styled, { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

import NavBar from './components/NavBar';
import Widgets from './components/Widgets/Widgets';
import Settings from './components/Settings';
import { ThemeTypeContext } from './providers/ThemeTypeProvider';
import { BackgroundContext, Background } from './providers/BackgroundProvider';
import { ForegroundContext } from './providers/ForegroundProvider';


const StyledWrapper = styled.div`
  min-height: 100vh;
  background-image: ${props => (props.theme.background === 'image' ? 'url(https://picsum.photos/1024/1024)' : null)};
  background: ${props => props.theme.background};
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 1px;
  background-attachment: fixed; 
`;

const getBackgroundColor = (type: Background) => {
  switch (type) {
    case 'dark':
      return '#303030';
    case 'light':
      return '#FAFAFA';
    default:
      return type;
  }
};


const App: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  const { themeType: type } = useContext(ThemeTypeContext);
  const { background } = useContext(BackgroundContext);

  const { foreground } = useContext(ForegroundContext);

  let themeType = type;

  if (type === 'default' && window && window.matchMedia) {
    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    themeType = (prefersDarkTheme.matches ? 'dark' : 'light');
    prefersDarkTheme.onchange = () => {
      themeType = (prefersDarkTheme.matches ? 'dark' : 'light');
    };
  }


  const muiTheme = createMuiTheme({
    palette: {
      type: themeType === 'default' ? undefined : themeType,
      primary: blue,
    },
  });

  const theme = {
    background: getBackgroundColor(background),
    foreground,
    type: themeType === 'default' ? undefined : themeType,
  };

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>

          <StyledWrapper>
            <CssBaseline />
            <NavBar onClick={() => setShowSettings(prev => !prev)} />
            {showSettings ? <Settings />
              : <Widgets />}
          </StyledWrapper>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
