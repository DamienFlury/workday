import React, { useContext } from 'react';
import styled from 'styled-components';
import Widget from './Widget';
import { QuoteContext } from '../../providers/QuoteProvider';

const StyledText = styled.span`
  display: block;
  font-family: Indie Flower;
  font-size: 1.5rem;
  margin-bottom: 20px;
  `;

interface IProps {
  readonly className?: string,
}

const Quote: React.FC<IProps> = ({ className }) => {
  const quote = useContext(QuoteContext);

  return (
    <Widget className={className}>
      <StyledText>
        {quote.quote}
      </StyledText>
      <StyledText>
-
        {' '}
        {quote.author}
      </StyledText>
    </Widget>
  );
};

export default Quote;
