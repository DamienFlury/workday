import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Widget from './Widget';

const StyledText = styled.span`
  display: block;
  font-family: Indie Flower;
  font-size: 1.5rem;
  margin-bottom: 20px;
  `;

const Quote = ({ className }) => {
  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://quotes.rest/qod.json')
      .then(res => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0]);
        setIsLoading(false);
      });
  });
  return (
    <Widget className={className}>
      {!isLoading
      && (
      <>
        <StyledText>
          {quote.quote}
        </StyledText>
        <StyledText>
-
          {' '}
          {quote.author}
        </StyledText>
      </>
      )
      }
    </Widget>
  );
};

export default Quote;
