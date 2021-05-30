import React from 'react';

const WeatherInfo = ({
    weather,
    temp,
    windSpeed,
    humidity,
    cityName,
}) =>{
    return(
        <div>
        <div>{`Weather: ${weather}`}</div>
        <div>{`Temp: ${temp}`}</div>
        <div>{`windSpeed: ${windSpeed}`}</div>
        <div>{`humidity: ${humidity}`}</div>
        <div>{`cityName:${cityName}`}</div>
        </div>
    )
};

export default WeatherInfo