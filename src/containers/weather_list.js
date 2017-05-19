import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityDate) {
    const name = cityDate.city.name;
    const temps = cityDate.list.map(weather => weather.main.temp - 271);
    const pressures = cityDate.list.map(weather => weather.main.pressure);
    const humidities = cityDate.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color='orange' units="°C" /></td>
        <td><Chart data={pressures} color='green' units="hPa" /></td>
        <td><Chart data={humidities} color='grey' units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>城市</th>
            <th>溫度（°C）</th>
            <th>氣壓（hPa）</th>
            <th>濕度（%）</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
