import React from 'react';

class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grafico: 'Gráficos locos sólo para entendidos',
    };
  }

    static canHandleView = (view) => view === 'Analytics'

    render() {
      return (
        <div>
            {this.state.grafico}
        </div>
      );
    }
}

export default Analytics;
