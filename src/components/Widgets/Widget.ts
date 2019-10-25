import { Paper } from '@material-ui/core';
import styled from 'styled-components';

const Widget = styled(Paper)`
  padding: 40px;
  /* background-color: ${props => (props.theme.foreground === 'transparent' ? props.theme.type === 'dark' ? 'rgba(0, 0, 0, .5)' : 'rgba(255, 255, 255, .5)' : null)}; */
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);   
  position: relative;
  z-index: 1;
  background: ${props => (props.theme.foreground === 'transparent' ? 'inherit' : 'null')};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: ${props => (props.theme.foreground === 'transparent' ? props.theme.type === 'dark'
    ? 'inset 0 0 2000px rgba(0, 0, 0, 0.9)' : 'inset 0 0 2000px rgba(255, 255, 255, 0.9)'
    : null)};
    filter: blur(20px);
    margin: -20px;
  }
`;

export default Widget;
