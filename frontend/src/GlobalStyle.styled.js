import {createGlobalStyle} from 'styled-components';
import {colors, font} from "./styles/theme";


export default createGlobalStyle`
html {
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700|Roboto:300,400,700&display=swap');
  font-family: ${font.family};
  font-size: ${font.module};
  scroll-behavior: smooth;
  scrollbar-width: none;
}
body {
  background: ${colors.background};
  margin: 0;
  padding: 0;
  overflow-x:hidden;
}
`;
