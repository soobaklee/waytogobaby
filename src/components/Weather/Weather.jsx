import React, { Component } from 'react';

class Weather extends Component {

    render() {
        return (
            <div className='Weather'>
                    <h2>Today in {this.props.city}</h2>
                <div className='Temp'>
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