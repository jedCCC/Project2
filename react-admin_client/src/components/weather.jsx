import React from 'react'
import WeatherAndTemp from '../components/WeatherAndTemp'
import WindSpeedAndHumidity from '../components/WindSpeedAndHumidity'
import './weather.less'

//weather route component
class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
            temp: null,
            weather: null,
            windSpeed: null,
            humidity: null,
        }
    }

    componentDidMount() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=6f0f19718f5b2eef464f5626acdbf0ca', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    weather: result.weather.description,
                    windSpeed: result.wind.speed,
                    name: result.name,
                    temp: result.main.temp,
                    humidity: result.main.humidity,
                })
            }
            )
            .catch((error) => error && alert(error.message))
    }

    render() {
        const { name, temp, windSpeed, weather, humidity } = this.state;

        return (
            <div className="weather">
                <header className="weather-header">
                    <h1>Weather Forecast</h1>
                </header>
                <section className="weather-content">
                    <h2>Current Local Weather</h2>
                    <WeatherAndTemp weather={weather} temp={(temp - 273.15).toFixed(1)} />
                    <WindSpeedAndHumidity windSpeed={windSpeed} humidity={humidity} city={name} />
                </section>
            </div>
        )
    }
}

export default Weather;