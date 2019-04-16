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
                <Link to='/'>WayToGoBaby</Link>

            </div>
        )
    }
}

export default PlayDatesPage;