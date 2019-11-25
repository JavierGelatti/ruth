import React from 'react';

class TemaActual extends React.Component {
    static canHandleView = (view) => view === 'Tema Actual'

    static render() {
      return (
        <div>
            Si, este es un tema actual o de actualidad :P
        </div>
      );
    }
}

export default TemaActual;
