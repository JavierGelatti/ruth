import React from 'react';
import ReactGoogleSlides from 'react-google-slides';
import { Titulo } from './Presentacion.styled';

class MostrarSlides extends React.Component {
  render() {
    const { linkDePresentacion } = this.props;
    if (linkDePresentacion !== null && linkDePresentacion !== '') {
      return <Titulo>No hay slides :(</Titulo>;
    }
    return <ReactGoogleSlides width="90%" slidesLink="https://docs.google.com/presentation/d/19rjVAtJPCjXCzlzv9s6-LJntRNtluRnLDZgc1GKPH2w/edit#slide=id.p4" slideDuration={20} showControls />;
  }
}

export default MostrarSlides;
