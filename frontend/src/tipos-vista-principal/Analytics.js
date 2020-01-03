import React from 'react';
import {
  AnalyticsContainer, SidebarIzquierdo, WorkInProgressContainer, Titulo, ImagenContainer,
  TitleContainer, SubAnalyticsContainer, GraphsContainer, ParticipantsContainer
} from './Analytics.styled';
import Countdown from '../reunion/Countdown';

class Analytics extends React.Component {
    static canHandleView = (view) => view === 'Analytics'

    mensaje = 'Pagina en desarrollo'

    render() {
      if (process.env.NODE_ENV === 'production') {
        return (
          <AnalyticsContainer>
            <SidebarIzquierdo/>
            <WorkInProgressContainer>
              <Titulo>{this.mensaje}</Titulo>
              <ImagenContainer src='./working.png'/>
            </WorkInProgressContainer>
          </AnalyticsContainer>
        );
      } else {
        return (
          <AnalyticsContainer>
            <SubAnalyticsContainer>
              <TitleContainer>
                <Titulo>{this.props.tema.titulo}</Titulo>
              </TitleContainer>
              <GraphsContainer>

              </GraphsContainer>
              <ParticipantsContainer>
                <Countdown activo={this.props.temaActivo}
                      segundos={this.props.segundosRestantes}/>
              </ParticipantsContainer>
            </SubAnalyticsContainer>
          </AnalyticsContainer>
        );
      }
    }
}

export default Analytics;
