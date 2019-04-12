import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareItems from '../../components/ShareItems/ShareItems';
import Advice from '../../components/Advice/Advice';
import PlayDatesPage from '../../pages/PlayDatesPage';

class CommunityPage extends Component {

    render(props) {
        return (
            <div>
                <Link to='/community/advice'>Advice</Link>&nbsp;&nbsp;
                <Link to='/community/share'>Item Share</Link>
                <ShareItems
                    {...props}
                    user={this.props.user}
                />
                <Advice
                    {...props}
                    user={this.props.user}
                />

                <PlayDatesPage
                    lat={this.props.lat}
                    lng={this.props.lng}
                    temp={this.props.temp}
                    icon={this.props.icon}
                    city={this.props.city}
                    user={this.props.user}
                />
            </div>
        )
    }
}

export default CommunityPage;