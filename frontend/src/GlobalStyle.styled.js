import { createGlobalStyle } from 'styled-components';
import { colors, font } from './styles/theme';

export default createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:300,400,700&display=swap);

html {
  font-size: ${font.module};
  scroll-behavior: smooth;
  scrollbar-width: none;
}
body {
  font-family: ${font.family};
  background: ${colors.background};
  margin: 0;
  padding: 0;
  overflow-x:hidden;
}
`;
