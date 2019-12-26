import React from 'react';

class Chart extends React.Component {
    graphOptions = () => {
      let generalOptions = {
        layout: {
          padding: {
            left: this.props.paddingLeft || 0,
            right: this.props.paddingRight || 0,
            top: this.props.paddingTop || 0,
            bottom: this.props.paddingBottom || 0,
          },
        },
      };
      if (this.props.chartType.name === 'Bar') {
        const barOptions = {
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
        generalOptions = { ...generalOptions, ...barOptions };
      }
      return generalOptions;
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
          datasets: this.props.data.data.map((data) => ({
            label: data.name,
            data: data.data,
            borderColor: data.color,
            backgroundColor: data.color,
            fill: false,
          })),
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
