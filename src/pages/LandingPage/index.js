import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather'

class LandingPage extends Component {

    render() {
        return (
            <div>
                <h1>Way To Go!</h1>
                <p>Caring for a little human being is perhaps one of the most challenging responsibilities anyone can encounter. If you're here, you probably are caring for a little one in some capacity and we first want to say, Congratulations and Welcome!</p>
                {if (temp && temp > 65) return <h5>Today seems like a great day for a play date! Find one now!</h5>}
                <Weather
                    lat={this.props.lat}
                    lng={this.props.lng}
                    temp={this.props.temp}
                    icon={this.props.icon}
                    city={this.props.city}
                />
            </div>
        )
    }
}

export default LandingPage;

