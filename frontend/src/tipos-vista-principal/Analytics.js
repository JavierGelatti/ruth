import React from 'react';

class Analytics extends React.Component {
    static canHandleView = (view) => view === 'Analytics'

    render() {
      return (
        <div>
            Gráficos locos sólo para entendidos
        </div>
      );
    }
}

export default Analytics;
