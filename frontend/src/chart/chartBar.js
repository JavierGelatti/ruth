import React from 'react';
import { Bar } from 'react-chartjs-2';

class ChartBar extends React.Component {
    graphOptions = () => {
      const barOptions = {
        layout: {
          padding: {
            left: 50,
            right: 50,
            top: 10,
            bottom: 10,
          },
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                suggestedMin: 0,
              },
            },
          ],
        },
      };
      return barOptions;
    }

    formattedData = () => ({
      labels: this.props.data.data.map((bar) => bar.name),
      datasets: [{
        data: this.props.data.data.map((bar) => bar.value),
        backgroundColor: this.props.data.color,
        borderColor: this.props.data.color,
      },
      ],
    })

    render() {
      return (
        <>
            <Bar
              data={this.formattedData()}
              options={this.graphOptions()}
            />
        </>
      );
    }
}

export default ChartBar;
