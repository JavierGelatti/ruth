import React from 'react';
import {
  PresentacionContainter, SidebarIzquierdo, SlidesContainer,
} from './Presentacion.styled';
import MostrarSlides from './MostrarSlides';


class Presentacion extends React.Component {
  static canHandleView = (view) => view === 'Presentación'

  render() {
    return (
      <PresentacionContainter>
        <SidebarIzquierdo/>
          <SlidesContainer>
            <MostrarSlides linkDePresentacion={this.props.tema.linkDePresentacion}/>
          </SlidesContainer>
      </PresentacionContainter>
    );
  }
}

export default Presentacion;
