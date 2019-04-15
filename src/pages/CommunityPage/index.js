import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareItemsPage from '../../pages/ShareItemsPage';
import AdvicePagePartial from '../../pages/AdvicePage/AdvicePagePartial';

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
                {}
                <AdvicePagePartial
                    {...props}
                    user={this.props.user}
                />                
            </div>
        )
    }
}

export default CommunityPage;