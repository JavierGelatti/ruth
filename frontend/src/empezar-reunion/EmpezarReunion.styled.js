import styled from 'styled-components';
import { font } from '../styles/theme';

export const EmpezarRootsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 9rem 8rem;
`;

export const TitleAndButton = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

export const HomeImage = styled.img`
  height: 20rem;
  width: 20rem;
  min-height: 20rem;
  min-width: 20rem;
  padding: 0rem 2rem;
`;

export const Title = styled.h1`
  font-size: ${font.sizeH1} ;
  font-family: ${font.h1};
  text-align: center;
`;
