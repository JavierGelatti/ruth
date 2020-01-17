import React from 'react';
import { colors } from '../styles/theme';
import ChartLine from './chartLine';
import ChartBar from './chartBar';

class TestChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLine: {
        horarios: ['11:00', '12:00', '13:00', '14:00'],
        data: [
          {
            name: '+1',
            color: colors.primary,
            data: [2, 5, 16, 42],
          },
          {
            name: '-1',
            color: 'red',
            data: [0, 2, 3, 4],
          },
          {
            name: 'redondear',
            color: 'blue',
            data: [0, 0, 2, 35],
          },
        ],
      },

      dataBar: {
        data: [
          {
            name: '+1',
            value: 42,
          },
          {
            name: '-1',
            value: 4,
          },
          {
            name: 'redondear',
            value: 35,
          },
          {
            name: 'slack',
            value: 2,
          },
        ],
        color: colors.primary,
      },

    };
  }

  render() {
    return (
      <>
        <ChartLine
          data={this.state.dataLine}
        />
        <ChartBar
          data={this.state.dataBar}
        />
      </>
    );
  }
}


export default TestChart;
