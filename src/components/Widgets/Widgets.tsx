import React from 'react';
import styled from 'styled-components';
import Weather from './Weather';
import Quote from './Quote';
import Time from './Time';
import Workday from './Workday/Workday';

const Grid = styled.div`
  display: grid;
  margin: 20px;
  grid-gap: 20px;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
  "time time"
  "workday workday"
  "weather weather"
  "quote quote";
  @media(min-width: 1024px) {
    grid-template-areas: "workday time"
    "workday weather"
    "workday quote";
  }
  background: inherit;
`;

const StyledWorkday = styled(Workday)`
  grid-area: workday;
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

const Widgets: React.FC = () => (
  <Grid>
    <StyledWorkday />
    <StyledTime />
    <StyledWeather />
    <StyledQuote />
  </Grid>
);

export default Widgets;
