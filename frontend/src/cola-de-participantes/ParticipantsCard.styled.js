import styled from 'styled-components';

export const CardSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const CardContainer = styled.div(({
  isTalking, isInteractive, height, width,
}) => `
  margin: ${!isTalking ? '0rem 1rem 0rem 1rem' : '0rem 1rem 0rem 1rem'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${isInteractive ? 'rgb(50, 50, 50)' : 'white'};
  justify-content: space-between;
  height: ${height};
  width: ${width};
  cursor: ${isTalking ? 'pointer' : ''};
  box-shadow: 1px 1px 3px ${isInteractive ? 'black' : 'grey'};
  border-radius: 5px;
`);

export const CardInteractionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const UserAvatar = styled.div(({ isTalking }) => `
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QRApUFMY11IHznfAbkthPa7HYm6bE1qlZbZTHV8EIK7_FAlx&s');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: ${!isTalking ? '0 0rem 1rem 0rem' : '0 -2rem 1rem -2rem'};
  height: 10rem;
  min-height: 10rem;
  width: ${!isTalking ? '13rem' : '15rem'};
`);

export const CardName = styled.span(({ isInteractive }) => `
  font-size: 1rem;
  text-align: center;
  color: ${isInteractive ? 'silver' : 'black'};
`);
