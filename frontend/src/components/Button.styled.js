import styled from "styled-components";
import {colors, font} from "../styles/theme";

export const Button = styled.button`
  font-size: 1.2rem;
  height: 2.5em;
  background: ${colors.primary};
  border-radius: 1em;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  color: white;
  font-family: ${font.text}
`;
