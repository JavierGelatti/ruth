import React, { useState } from 'react';
import {
  Arrow, TemarioContainer, Temas, Titulo,
} from './Temario.styled';

const Temario = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TemarioContainer isActive={isActive}>
      <Arrow onMouseEnter={() => setIsActive(true)}> + </Arrow>
      <Temas onMouseLeave={() => setIsActive(false)}>
        <Titulo> Temario </Titulo>
      </Temas>
    </TemarioContainer>
  );
};

export default Temario;
