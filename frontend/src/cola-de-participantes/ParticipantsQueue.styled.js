import styled from 'styled-components';

export const QueueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QueuedLeftCardsStyle = styled.div`
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  justifyContent: 'center',
  paddingTop: '1rem',
  alignItems: 'center',
`;

export const QueuedRightCardsStyle = styled.div`
  display: 'flex',
  flexDirection: 'column',
  width: '40rem',
  justifyContent: 'center',
  paddingTop: '1rem',
  alignItems: 'center',
  opacity: '0.5',
`;

export const QueuedCardsLeftContainerStyle = styled.div`
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderRight: '1px solid silver',
  paddingRight: '1rem',
  justifyContent: 'flex-end',
  width: '100%',
`;

export const QueuedCardsRightContainerStyle = styled.div`
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderLeft: '1px solid silver',
  paddingLeft: '1rem',
  width: '100%',

`;
