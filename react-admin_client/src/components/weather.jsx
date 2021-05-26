import React from 'react'
import axios from 'axios';
import WeatherAndTemp from '../components/WeatherAndTemp'
import WindSpeedAndHumidity from '../components/WindSpeedAndHumidity'
import './weather.less'

//weather route component
class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            cityName: 'Sydney',
            weatherAndTemp:null,
            windSpeedAndHumidity: null,
        }
    }

    componentDidMount() {
        axios
            .get('')
            .then((response) => console.log(response))
            // .then((result) => {
            //     const weatherAndTemp={
            //         weather: result.data.data.main.weather,
            //         temp: result.data.data.main.maxCelsius,
            //     }
            // })
            .catch((error) => error && alert(error.message));
    }

    render() {

        return (
            <div className="weather">
                <header className="weather-header">
                    <h1>Weather Forecast</h1>
                </header>
                <section className="weather-content">
                    <h2>Current Local Weather</h2>
                    <div>Local Weather Display</div>
                    <WeatherAndTemp weather="sunny" temp="30" />
                    <WindSpeedAndHumidity windSpeed="20km/h" humidity="50%" city="Syd"/>
                </section>
            </div>
        )
    }
}

export default Weather;