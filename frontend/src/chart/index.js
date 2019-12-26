import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { colors } from '../styles/theme';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLine: {
        labels: ['11:00', '12:00', '13:00', '14:00'],
        datasets: [{
          label: '+1',
          data: [
            2,
            5,
            16,
            42,
          ],
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          fill: false,
        },
        {
          label: '-1',
          data: [
            0,
            2,
            3,
            3,
          ],
          backgroundColor: 'red',
          borderColor: 'red',
          fill: false,
        },
        {
          label: 'redondear',
          data: [
            0,
            1,
            3,
            35,
          ],
          backgroundColor: 'blue',
          borderColor: 'blue',
          fill: false,
        }],
      },

      dataBar: {
        labels: ['+1', '-1', 'redondear', 'slack'],
        datasets: [{
          data: [
            20,
            5,
            16,
            0,
          ],
          backgroundColor: colors.primary,
        },
        ],
      },

      optionsLine: {
        legend: {
          display: true,
        },
      },

      optionsBar: {
        legend: {
          display: false,
        },
      },
    };
  }

  // {type: Line/Bar, data: {label: "+1",datos:[{"11:00",1},{"12:00",3}, color:"red"]}}

  render() {
    return (
      <>
        <Line
          data={this.state.dataLine}
          options={this.state.optionsLine}
        />
        <Bar
          data={this.state.dataBar}
          options={this.state.optionsBar}
        />
      </>
    );
  }
}


export default Chart;
