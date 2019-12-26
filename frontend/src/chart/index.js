import React from 'react';
import { Bar } from 'react-chartjs-2';
import { colors } from '../styles/theme';

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        labels: ['+1', '-1', 'redondear', 'slack'],
        datasets: [{
          data: [
            25,
            14,
            4,
            2,
          ],
          backgroundColor: colors.primary,
        }],
      },

      options: {
        legend: {
          display: false,
        },
      },
    };
  }

  render() {
    return (
      <>
        <Bar
          data={this.state.data}
          options={this.state.options}
        />
      </>
    );
  }
}


export default Chart;
