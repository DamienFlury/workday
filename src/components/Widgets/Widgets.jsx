import React from 'react';
import styled from 'styled-components';
import Workday from './Workday/Workday';
import Weather from './Weather';
import Quote from './Quote';
import Time from './Time';

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

const StyledGohome = styled(Workday)`
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

const Widgets = () => (
  <Grid>
    <StyledGohome />
    <StyledTime />
    <StyledWeather />
    <StyledQuote />
  </Grid>
);

export default Widgets;
