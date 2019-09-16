import React, { useEffect } from 'react';
import styled from 'styled-components';
import {  useDispatch, useSelector } from 'react-redux';
import Widget from './Widget';
import { fetchQuote } from '../../store/actions/quote-actions';
import { StoreState } from '../../store/store';

const StyledText = styled.span`
  display: block;
  font-family: Indie Flower;
  font-size: 1.5rem;
  margin-bottom: 20px;
  `;

interface IProps {
  className?: string,
}

const Quote: React.FC<IProps> = ({ className }) => {
  const quote: any = useSelector((state: StoreState) => state.quote.data);
  const status: any = useSelector((state: StoreState) => state.quote.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'initial') {
      dispatch(fetchQuote());
    }
  }, [dispatch, status]);
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
