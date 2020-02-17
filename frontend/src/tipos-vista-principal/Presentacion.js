import React from 'react';
import ReactGoogleSlides from 'react-google-slides';
import { SidebarIzquierdo, SlidesContainer } from './Presentacion.styled';
import Countdown from '../reunion/Countdown';
import {useSpring} from 'react-spring'
import {AnimatedContainer} from "../reunion/Reunion.styled";

const Presentacion = (props) => {
  const fade = useSpring({opacity: 1, from: {opacity: 0}});
    return (
      <AnimatedContainer style={fade}>
        <SidebarIzquierdo/>
        <SlidesContainer>
          <ReactGoogleSlides width="90%" slidesLink={props.tema.linkDePresentacion} slideDuration={20} showControls/>
          <Countdown activo={props.temaActivo}
                      segundos={props.segundosRestantes}/>
        </SlidesContainer>
      </AnimatedContainer>
    );
};

export default Presentacion;
