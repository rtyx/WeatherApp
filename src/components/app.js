import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

import SearchBar from '../containers/search_bar'; // eslint-disable-line no-unused-vars
import WeatherList from '../containers/weather_list'; // eslint-disable-line no-unused-vars

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
