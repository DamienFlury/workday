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

type Props = {
  readonly className?: string;
}

const Quote: React.FC<Props> = ({ className }) => {
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
