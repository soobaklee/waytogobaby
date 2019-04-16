import React from 'react';

const Weather = props => {
    let intro = props.user ?
        <div className='Temp'>
            <h1>{props.city} Weather</h1>
            <p className="Temperature">{props.temp} &#176;F</p>
        </div>
        :
        <div className='Temp'>
            <h1>{props.city} Weather</h1>
            <p className="Temperature">{props.temp} &#176;F</p>
        </div>

    return (
        <div>
            <h1 className="Weather-title">{props.city} Weather</h1>
            <div className="Wdata">
                <div className="Temperature">{props.temp}&#176;F</div>
                {props.icon &&
                    <img className='Temp-icon'
                        src={`https://openweathermap.org/img/w/${props.icon}.png`}
                        alt={`${props.temp} Conditions`}
                    />
                }
            </div>
        </div>
    );
}

export default Weather;