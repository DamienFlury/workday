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
};

const Quote: React.FC<Props> = ({ className }) => {
  const quote = useContext(QuoteContext);

  return (
    <Widget className={className}>
      <StyledText>{quote.quote}</StyledText>
      <StyledText>- {quote.author}</StyledText>
      <span style={{ zIndex: 50, fontSize: '0.9em', fontWeight: 'bold' }}>
        <img
          src="https://theysaidso.com/branding/theysaidso.png"
          height="20"
          width="20"
          alt="theysaidso.com"
        />
        <a
          href="https://theysaidso.com"
          title="Powered by quotes from theysaidso.com"
          style={{ color: '#ccc', marginLeft: '4px', verticalAlign: 'middle' }}
        >
          They Said So®
        </a>
      </span>
    </Widget>
  );
};

export default Quote;
