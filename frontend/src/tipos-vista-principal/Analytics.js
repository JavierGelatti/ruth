import React from 'react';
import {
  AnalyticsContainter, SidebarIzquierdo, WorkInProgressContainer, Titulo, ImagenContainer,
} from './Analytics.styled';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grafico: 'Página en desarrollo',
    };
  }

    static canHandleView = (view) => view === 'Analytics'

    render() {
      return (
        <AnalyticsContainter>
          <SidebarIzquierdo/>
          <WorkInProgressContainer>
            <Titulo>{this.state.grafico}</Titulo>
            <ImagenContainer src='./working.png'/>
          </WorkInProgressContainer>
        </AnalyticsContainter>
      );
    }
}

export default Analytics;
