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
  justifyContent: 'center',
  height: !isTalking ? '15rem' : '18rem',
  width: !isTalking ? '10rem' : '12rem',
  cursor: isTalking ? 'pointer' : '',
});

export const UserAvatar = styled.div(({ isTalking }) => `
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9QRApUFMY11IHznfAbkthPa7HYm6bE1qlZbZTHV8EIK7_FAlx&s');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: ${!isTalking ? '-2rem 0rem 1rem 0rem' : '-3rem -2rem 1rem -2rem'};
  height: 10rem;
  width: ${!isTalking ? '10rem' : '12rem'};
`);

export const CardName = styled.h4`
  width: 10rem;
  text-align: center;
  height: 2rem;
  margin-bottom: 1rem;
  margin-top: 0;
`;