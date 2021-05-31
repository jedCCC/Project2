import React from 'react'
import styled, {css} from 'styled-components'
import WeatherInfo from './WeatherInfoCard/index'
import './weather.less'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-image: url('https://wallpaperaccess.com/full/2629319.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;
const Header=styled.header`
    display: flex;
    align-items: center;
    height: 80px;
    background-color: rgba(20, 21, 13 ,0.5);
`;
const Title = styled.h1`
    font-size:30px;
    color:white;
    margin-left:40%;
`;
const Card= styled.section`
    border-radius:10%;
    width:400px;
    height:300px;
    background-image:url('https://i.imgur.com/GhQZhaO.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 50px auto;
    padding: 20px 40px;
    font-family: sans-serif;
    color: ivory;
    font-size:2rem;
    text-align: center;
`;


//weather route component
class Weather extends React.Component {
    constructor() {
        super();
        this.state = {     
            temp: null,
            weather: null,
            windSpeed: null,
            humidity: null,
            cityName: null,
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
                    cityName: result.name,
                    temp: result.main.temp,
                    humidity: result.main.humidity,
                })
            }
            )
            .catch((error) => error && alert(error.message))
    }

    render() {
        const { cityName, temp, windSpeed, weather, humidity } = this.state;
        return (
            <Wrapper>
                <Header>
                    <Title>Weather Forecast</Title>
                </Header>
                <Card>
                    <h2 className="weather-content-title">Current Local Weather</h2>
                    <WeatherInfo weather={weather} temp={(temp - 273.15).toFixed(1)} 
                    windSpeed={windSpeed} humidity={humidity} cityName={cityName}/>
                </Card>
            </Wrapper>
        )
    }
}

export default Weather;