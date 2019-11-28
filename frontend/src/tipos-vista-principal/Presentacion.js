import React from 'react';

class Presentacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'Acá ven preciosas slides de presentación',
    };
  }

  static canHandleView = (view) => view === 'Presentación'

  render() {
    return (
      <div>
          {this.state.link}
      </div>
    );
  }
}

export default Presentacion;
