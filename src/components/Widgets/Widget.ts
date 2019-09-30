import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const Widget = styled(Paper)`
  padding: 40px;
  background-color: ${props => (props.theme.foreground === 'transparent' ? 'rgba(255, 255, 255, .25)' : null)};
  backdrop-filter: blur(10px);
`;

export default Widget;
