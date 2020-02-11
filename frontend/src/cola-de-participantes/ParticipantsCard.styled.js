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
  margin: ${!isTalking ? '0em 1em 0em 1em' : '0em 1em 0em 1em'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${isInteractive ? 'linear-gradient(145deg, #c7c7c7, #ececec)' : 'white'};
  justify-content: space-between;
  height: ${height};
  width: ${width};
  cursor: ${isTalking ? 'pointer' : ''};

  box-shadow: 5px 5px 10px #828282, -5px -5px 10px #ffffff;
  border-radius: 20px;
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
  padding-bottom: 2em;
  height: 100%;
  width: 100%;
`;

export const UserAvatar = styled.div(({ isTalking }) => `
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QRApUFMY11IHznfAbkthPa7HYm6bE1qlZbZTHV8EIK7_FAlx&s');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 20px 20px 0 0;
  margin: ${!isTalking ? '0 0em 1em 0em' : '0 -2em 1em -2em'};
  height: 7em;
  min-height: 7em;
  width: ${!isTalking ? '11em' : '13em'};
`);

export const CardName = styled.span(({ isInteractive }) => `
  font-size: 1em;
  text-align: center;
  color: ${isInteractive ? 'grey' : 'black'};
`);
