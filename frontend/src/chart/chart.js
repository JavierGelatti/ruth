import React from 'react';

class Chart extends React.Component {
    graphOptions = () => {
      if (this.props.chartType.name === 'Bar') {
        return {
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
      }
      return null;
    }

    formattedData = () => {
      if (this.props.chartType.name === 'Bar') {
        return {
          labels: this.props.data.data.flatMap((keyValue) => Object.keys(keyValue)),
          datasets: [{
            data: this.props.data.data.flatMap((keyValue) => Object.values(keyValue)),
            backgroundColor: this.props.data.color,
            borderColor: this.props.data.color,
          },
          ],
        };
      }
      if (this.props.chartType.name === 'Line') {
        return {
          labels: this.props.data.horarios,
          datasets: this.props.data.data,
        };
      }
      return null;
    }

    render() {
      const ChartType = this.props.chartType;
      return (
        <>
            <ChartType
              data={this.formattedData()}
              options={this.graphOptions()}
            />
        </>
      );
    }
}

export default Chart;
