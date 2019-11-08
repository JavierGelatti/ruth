import styled from 'styled-components';
import {colors, font} from "../styles/theme";

export const EmpezarRootsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-family: ${font.title};
`;

export const Button = styled.button`
  font-size: 1.2rem;
  background: ${colors.primary};
  border-radius: 1em;
  border: none;
  padding: 0.5em;
  cursor: pointer;
  color: white;
  font-family: ${font.text}
`;
