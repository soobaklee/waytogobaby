import React, { Component } from 'react';

class Weather extends Component {

    render() {
        return (
            <div className='Weather'>
                <div className='Temp'>
                <h2>Weather Today in </h2>
                    {this.props.temp}
                </div>
                {this.props.icon &&
                    <img className='Temp-icon'
                        src={`https://openweathermap.org/img/w/${this.props.icon}.png`}
                        alt={`${this.props.temp} Conditions`}
                    />
                }
            </div>
        );
    }
}

export default Weather;