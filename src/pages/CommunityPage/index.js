import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareItems from '../../components/ShareItems/ShareItems';
import Advice from '../../components/Advice/Advice';
import PlayDatesPage from '../../pages/PlayDatesPage';

class CommunityPage extends Component {

    render() {
        return (
            <div>
                <h1>Community Board for Item Share, Trading, PlayDates</h1>
                <Link to='/community/advice'>Advice</Link><br></br>
                <Link to='/community/share'>Item Share</Link>            
            </div>
        )
    }
}

export default CommunityPage;