import styled from 'styled-components';

export const CardSubcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const cardContainerStyle = (isTalking) => ({
  margin: !isTalking ? '0rem 1rem 0rem 1rem' : '0rem 1rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'grey',
  justifyContent: 'space-between',
  height: !isTalking ? '17rem' : '20rem',
  width: !isTalking ? '12rem' : '14rem',
  cursor: isTalking ? 'pointer' : '',
});

export const CardInteractionsContainer = styled.div`
  display: 'flex',
  flex-direction: 'column',
  align-items: 'center',
  justify-content: 'space-between',
  height: '18rem',
  width: '12rem'
`;

export const UserAvatar = styled.div(({ isTalking }) => `
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QRApUFMY11IHznfAbkthPa7HYm6bE1qlZbZTHV8EIK7_FAlx&s');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: ${!isTalking ? '0 0rem 1rem 0rem' : '0 -2rem 1rem -2rem'};
  height: 10rem;
  width: ${!isTalking ? '12rem' : '14rem'};
`);

export const CardName = styled.span`
  width: 10rem;
  text-align: center;
  margin-top: 0;
  font-weight: 700;
`;
