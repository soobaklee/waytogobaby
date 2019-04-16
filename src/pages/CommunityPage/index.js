import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareItemsOpening from '../../components/ShareItems/ShareItemsOpening';
import AdvicePagePartial from '../../pages/AdvicePage/AdvicePagePartial';

class CommunityPage extends Component {

    render(props) {
        return (
            <div>
                <Link to='/community/advice'>Advice</Link>&nbsp;&nbsp;
                <Link to='/community/share'>
                <ShareItemsOpening
                    {...props}
                    user={this.props.user}
                /></Link>
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