import React from 'react';
import {
  AnalyticsContainter, SidebarIzquierdo, WorkInProgressContainer, Titulo, ImagenContainer,
} from './Analytics.styled';

class Analytics extends React.Component {
    static canHandleView = (view) => view === 'Analytics'

    mensaje = 'Pagina en desarrollo'

    render() {
      return (
        <AnalyticsContainter>
          <SidebarIzquierdo/>
          <WorkInProgressContainer>
            <Titulo>{this.mensaje}</Titulo>
            <ImagenContainer src='./working.png'/>
          </WorkInProgressContainer>
        </AnalyticsContainter>
      );
    }
}

export default Analytics;
