import styled from 'styled-components';
import { colors, font, sizeBreakpoint } from '../styles/theme';

export const Button = styled.button`
  font-family: ${font.p};
  font-size:  ${font.sizeP};
  @media (min-width: ${sizeBreakpoint.bigWidth}), @media (min-height: ${sizeBreakpoint.bigHeight})  {
    font-size: 1.75em;
  }
  background: ${(props) => (!props.disabled ? colors.primary : colors.black30)};
  border-radius: 0.2em;
  border: none;
  padding: 0.5em 3em;
  cursor: ${(props) => (!props.disabled ? 'pointer' : null)};
  color: ${(props) => (!props.disabled ? colors.white : colors.black50)};
  font-family: ${font.p};
  &:hover {
    background: ${(props) => (!props.disabled ? colors.viridian : colors.black30)};
  }
`;

export const SecondaryButton = styled(Button)`
  border: 0.07em solid;
  border-color: ${(props) => (!props.disabled ? colors.downy : colors.black30)};
  background: ${colors.white};
  color: ${(props) => (!props.disabled ? colors.downy : colors.black40)};
  &:hover {
    background: ${(props) => (!props.disabled ? colors.black10 : colors.white)};
  }
`;
