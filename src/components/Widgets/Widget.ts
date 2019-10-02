import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const Widget = styled(Paper)`
  padding: 40px;
  background-color: ${props => (props.theme.foreground === 'transparent' ? props.theme.type === 'dark' ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .5)' : null)};
  backdrop-filter: blur(20px);
`;

export default Widget;
