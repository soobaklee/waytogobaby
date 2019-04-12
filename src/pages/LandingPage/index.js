import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather'

const LandingPage = (props) => {
    // let scheduleaplaydate = if (temp > 65) { "Let's Schedule a PlayDate Today!" } else { "Schedule a PlayDate soon!" };

    return (
        <div>
            <h1>Way To Go!</h1>
            <p>We're glad you found us.
                Caring for a little human being is perhaps one of the most
                challenging responsibilities anyone can encounter.
                If you're here and caring for a growing, little human being,
                we have resources to help and to cheer you on.
                    We hope you are enjoying your adventure and <br></br>
                Welcome to Way To Go Baby!
                </p>
            <Weather
                
                lat={props.lat}
                lng={props.lng}
                temp={props.temp}
                icon={props.icon}
                city={props.city}
                user={props.user}
            />
            <p className="weather-description">
                {(() => {
                    switch (props.icon) {
                        case '01d': return "Don't forget sun protection today!";
                        case '02d': return "A little cloudy, but still good weather for an outside playdate!";
                        case '03d': return "It might be cloudy outside, but an indoor playdate would be great!";
                        case '04d': return "Don't let the clouds intimidate you, schedule an indoor playdate!";
                        case '09d': return "Don't get caught in the rain today!";
                        case '10d': return "Be careful driving in the rain today!";
                        case '11d': return "Sometimes, it's best to stay in a nice dry building!";
                        case '13d': return "Look at the snow!!";
                        case '50d': return "If you're leaving the house, be careful of the mist!";
                        default: return "Checkout Playdates in your area!";
                    }
                })()}
            </p>
        </div>
    )
}

export default LandingPage;

