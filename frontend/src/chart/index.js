import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { colors } from '../styles/theme';
import Chart from './chart';

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
            value: 20,
          },
          {
            name: '-1',
            value: 5,
          },
          {
            name: 'redondear',
            value: 16,
          },
          {
            name: '+slack',
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
        <Chart
          chartType= {Line}
          data={this.state.dataLine}
          paddingLeft={50}
          paddingRight={50}
          paddingTop={30}
          paddingBottom={30}
        />
        <Chart
          chartType= {Bar}
          data={this.state.dataBar}
        />
      </>
    );
  }
}


export default TestChart;
