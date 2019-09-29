import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Widget from './Widget';
import { fetchQuote } from '../../store/actions/quote-actions';
import { StoreState } from '../../store/store';
import { QuoteContext } from '../../providers/QuoteProvider';

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
  const [{ data, status}, fetchQuote] = useContext(QuoteContext);
  useEffect(() => {
    if (status === 'initial') {
      fetchQuote()
    }
  }, [fetchQuote, status]);
  return (
    <Widget className={className}>
      {status === 'success' && data && (
      <>
        <StyledText>
          {data.quote}
        </StyledText>
        <StyledText>
-
          {' '}
          {data.author}
        </StyledText>
      </>
      )
      }
    </Widget>
  );
};

export default Quote;
