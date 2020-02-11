import styled from 'styled-components';
import { font } from '../styles/theme';

export const ClockContainer = styled.div(({ isInteractive }) => `
  color: ${isInteractive ? 'silver' : 'black'};
  font-family: ${font.h1};
  font-size: 2rem;
  margin-top: 0.5rem;
`);
