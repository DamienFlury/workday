import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';
import { fetchQuote } from '../../store/actions/quote-actions';

const StyledText = styled.span`
  display: block;
  font-family: Indie Flower;
  font-size: 1.5rem;
  margin-bottom: 20px;
  `;

const Quote = ({ className }) => {
  const quote = useSelector(state => state.quote.data);
  const status = useSelector(state => state.quote.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'initial') {
      dispatch(fetchQuote());
    }
  }, []);
  return (
    <Widget className={className}>
      {status === 'success' && (
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
