import React from 'react';

const WindSpeedAndHumidity = ({
    windSpeed,
    humidity,
    city,
})=>{
    return(
        
        <React.Fragment>
            <div>
                <div>{`WindSpeed: ${windSpeed}`}</div>
                <div>{`humidity:${humidity}`}</div>
                <div>{`city:${city}`}</div>
            </div>
        </React.Fragment>
    )
};

export default WindSpeedAndHumidity;