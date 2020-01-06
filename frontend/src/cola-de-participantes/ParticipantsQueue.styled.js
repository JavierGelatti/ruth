import styled from 'styled-components';

export const QueueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const QueuedLeftCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  justify-content: center;
  padding-top: 1rem;
  align-items: center;
`;

export const QueuedRightCardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  justify-content: center;
  padding-top: 1rem;
  align-items: center;
  opacity: 0.5;
`;

export const QueuedCardsLeftContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-right: 1px solid silver;
  padding-right: 1rem;
  justify-content: flex-end;
  width: 100%;
`;

export const QueuedCardsRightContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-left: 1px solid silver;
  padding-left: 1rem;
  width: 100%;

`;
