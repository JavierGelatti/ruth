import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { colors } from '../styles/theme';
import Chart from './chart';

class TestChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      dataLine2: {
        horarios: ['11:00', '12:00', '13:00', '14:00'],
        data: [
          {
            label: '+1',
            borderColor: colors.primary,
            backgroundColor: colors.primary,
            data: [2, 5, 16, 42],
            fill: false,
          },
          {
            label: '-1',
            borderColor: 'red',
            backgroundColor: 'red',
            data: [0, 2, 3, 4],
            fill: false,
          },
          {
            label: 'redondear',
            borderColor: 'blue',
            backgroundColor: 'blue',
            data: [0, 0, 2, 35],
            fill: false,
          },
        ],
      },

      dataBar2: {
        data: [
          { '+1': 20 },
          { '-1': 5 },
          { redondear: 16 },
          { slack: 2 },
        ],
        color: colors.primary,
      },

    };
  }

  render() {
    return (
      <>
        <Chart
          chartType= {Line}
          data={this.state.dataLine2}
        />
        <Chart
          chartType= {Bar}
          data={this.state.dataBar2}
        />
      </>
    );
  }
}


export default TestChart;
