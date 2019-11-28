import React from 'react';

class Presentacion extends React.Component {
    static canHandleView = (view) => view === 'Presentación'

    render() {
      return (
        <div>
            Acá ven preciosas slides de presentación
        </div>
      );
    }
}

export default Presentacion;
