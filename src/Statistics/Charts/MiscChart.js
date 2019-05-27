import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

class MiscChart extends Component {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    gamesData: PropTypes.shape({
      playerId: PropTypes.number.isRequired,
      games: PropTypes.array.isRequired
    }).isRequired,
    player: PropTypes.object.isRequired
  }

  state = {
    columnChartOptions: {
      backgroundColor: "transparent",
      isStacked: true,
      chartArea: { top: 10 },
      colors: ["#d93344", "#41CD64", "#5486d1", "#9d4dc5"],
      legend: {
        maxLines: 2,
        position: "bottom",
        textStyle: {
          color: "#f8f8ff",
          fontName: "Roboto",
          fontSize: 14
        }
      },
      hAxis: { textStyle: { color: "#f8f8ff", fontName: "Roboto", fontSize: 11 } },
      vAxis: { textStyle: { color: "#f8f8ff", fontName: "Roboto", fontSize: 11 } }
    }
  }

  generateChartData(gamesData) {

  }

  render() {
    const chartData = this.generateChartData(this.props.gamesData);
    return (
      <section className="stats_block">
        <h2 id={this.props.id} className="text-center">{this.props.title}</h2>
        <div className="row">
          {
            chartData ? (
              <div className="col-12">
                <h3 className="text-center">Activities in the past 15 days</h3>
                <Chart
                  chartType="ColumnChart"
                  options={this.state.columnChartOptions}
                  data={chartData}
                  width={'100%'}
                  height={'300px'}
                />
              </div>
            ) : null
          }
        </div>
      </section>
    );
  }
}

export default MiscChart;