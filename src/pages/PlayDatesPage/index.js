import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Weather from '../../components/Weather/Weather';

class PlayDatesPage extends Component {


    render() {
        // let userList = users
        // let adviceList = this.state.advice.slice(-6, -1).map((advice, idx) => (
        //     <div className={`${styles.adviceList}`} key={idx}>
        //         <Link to={`/community/advice/${advice._id}`}>
        //             <p>Concern: {advice.title}</p>
        //             <p className={`${styles.content}`}>{advice.content}</p>
        //             <p>Posted by {advice.postedBy[0].name} on {moment(advice.updatedAt).format('LL')}</p>
        //         </Link>
        //     </div>
        // ));

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
                <p className="weather-description">
                    {(() => {
                        switch (this.props.icon) {
                            case '01d': return "Don't forget sun protection today!";
                            case '02d': return "A little cloudy, but still good weather for an outside playdate!";
                            case '03d': return "It might be cloudy outside, but an indoor playdate would be great!";
                            case '04d': return "Don't let the clouds intimidate you, schedule an indoor playdate!";
                            case '09d': return "Don't get caught in the rain today!";
                            case '10d': return "Be careful driving in the rain today!";
                            case '11d': return "Sometimes, it's best to stay in a nice dry building!";
                            case '13d': return "Look at the snow!! Maybe your little ones might enjoy some time with the white powder outside?";
                            case '50d': return "If you're leaving the house, be careful of the mist!";
                            default: return "Checkout upcoming PlayDates or make your own for another day!";
                        }
                    })()}
                </p>
            </div>
        )
    }
}

export default PlayDatesPage;