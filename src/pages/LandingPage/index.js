import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather'

class LandingPage extends Component {

    render() {
        return (
            <div>
                <h1>Landing Page</h1>
                <Weather
                    lat={this.props.lat}
                    lng={this.props.lng}
                    temp={this.props.temp}
                    icon={this.props.icon}
                />
            </div>
        )
    }
}

export default LandingPage;

