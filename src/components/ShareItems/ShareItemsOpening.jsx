import React, {Component} from 'react';
import styles from './ShareItemsOpening.module.css';

class ShareItemsOpening extends Component {
    render() {
        return (
            <div className={`${styles.opening}`}>
                <p className={`${styles.head}`}>WAY TO SHARE</p>
                <p className='wrapText' >Post the items you are ready to share with the community and wait for someone to get in contact with you!</p>
            </div>
        )
    }
}

export default ShareItemsOpening;