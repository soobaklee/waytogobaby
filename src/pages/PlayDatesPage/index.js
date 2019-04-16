import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Weather from '../../components/Weather/Weather';

class PlayDatesPage extends Component {


    render() {
        return (
            <div>
                <h1>PlayDates To Go</h1>
                <Weather
                    lat={this.props.lat}
                    lng={this.props.lng}
                    temp={this.props.temp}
                    icon={this.props.icon}
                    city={this.props.city}
                    user={this.props.user}
                />
                <Link to='/'>WayToGoBaby</Link>

            </div>
        )
    }
}

export default PlayDatesPage;