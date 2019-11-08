import React, { useState } from 'react';
import {
  Arrow, TemarioContainer, Temas, Titulo, TituloDeTema,
} from './Temario.styled';

const Temario = ({ temario, indexTemaActual }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <TemarioContainer isActive={isActive}>
      <Arrow onMouseEnter={() => setIsActive(true)}> + </Arrow>
      <Temas onMouseLeave={() => setIsActive(false)}>
        <Titulo> Temario </Titulo>
        {temario.map((tema, temaIndex) => <TituloDeTema key={temaIndex} isSelected={temaIndex === indexTemaActual}>
            {tema.titulo}
          </TituloDeTema>)}
      </Temas>
    </TemarioContainer>
  );
};

export default Temario;
