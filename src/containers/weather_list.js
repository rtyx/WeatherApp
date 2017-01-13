import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Chart from '../components/chart'; // eslint-disable-line no-unused-vars
import GoogleMap from '../components/google_map'; // eslint-disable-line no-unused-vars

import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(data) {
        const name = data.city.name;
        const temps = data.list.map((weather) => weather.main.temp - 273);
        const press = data.list.map((weather) => weather.main.pressure);
        const humid = data.list.map((weather) => weather.main.humidity);
        const lon = data.city.coord.lon;
        const lat = data.city.coord.lat;
        // const { lon, lat } = data.city.coord;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color='orange' units='ºC'/></td>
                <td><Chart data={press} color='green' units='hPA'/></td>
                <td><Chart data={humid} color='lightblue' units='%'/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (ºC)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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
