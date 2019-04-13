import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareItemsPage from '../../pages/ShareItemsPage';
import AdvicePage from '../../pages/AdvicePage';
import NewAdvicePage from '../../pages/NewAdvicePage';
import PlayDatesPage from '../../pages/PlayDatesPage';

class CommunityPage extends Component {

    render(props) {
        return (
            <div>
                <Link to='/community/advice'>Advice</Link>&nbsp;&nbsp;
                <Link to='/community/share'>Item Share</Link>
                <ShareItemsPage
                    {...props}
                    user={this.props.user}
                />
                <AdvicePage
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