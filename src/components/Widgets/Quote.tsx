import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Widget from './Widget';
import { StoreState } from '../../store';
import { fetchQuote } from '../../store/quote/quote-slices';

const StyledText = styled.span`
  display: block;
  font-family: Indie Flower;
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

type Props = {
  readonly className?: string;
};

const Quote: React.FC<Props> = ({ className }) => {
  const { quote, status } = useSelector((state: StoreState) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchQuote());
    }
  }, [dispatch, status]);

  return (
    <Widget className={className}>
      <StyledText>{quote.quote}</StyledText>
      <StyledText>- {quote.author}</StyledText>
    </Widget>
  );
};

export default Quote;
