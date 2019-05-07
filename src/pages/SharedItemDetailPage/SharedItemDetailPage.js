import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import shareService from '../../utils/shareService';
import styles from '../ShareItemsPage/ShareItemsPage.module.css';
import moment from 'moment';

const SharedItemDetailPage = props => {
    // let sharedItem = props.sharedItems.filter(sharedItems => {
    //     return sharedItems._id === props.match.params.id
    // })[0]

    // let sharedItemShow = sharedItem ?
    //     <div className={`${styles.content}`}>
    //         <h3>Shared by {sharedItem.postedBy[0].name}, {moment(sharedItem.postedBy[0].updatedAt).calendar()}</h3>
    //         <h1>{sharedItem.title}</h1>
    //         <h3>{sharedItem.content}</h3>
    //     </div>
    //     :
    //     <div>Waiting to Load</div>

    return (
        <div>
            <h1>Hellllllllllllo</h1>
            <h1>{props.sharedItems[props.match.params.id].title}</h1>
        </div>
    )
}

export default SharedItemDetailPage;