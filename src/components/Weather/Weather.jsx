import React from 'react';

const Weather = props => {
    let intro = props.user ?
        <div className='Temp'>
            <h2>Today in {props.city} for {props.user.name}</h2>
            {props.temp}
        </div>
        :
        <div className='Temp'>
            <h2>Today in {props.city}</h2>
            {props.temp}
        </div>

    return (
        <div className='Weather'>
            {intro}
            {props.icon &&
                <img className='Temp-icon'
                    src={`https://openweathermap.org/img/w/${props.icon}.png`}
                    alt={`${props.temp} Conditions`}
                />
            }
        </div>
    );
}

export default Weather;