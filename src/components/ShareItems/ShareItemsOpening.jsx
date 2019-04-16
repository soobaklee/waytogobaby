import React, {Component} from 'react';
import styles from './ShareItemsOpening.module.css';

class ShareItemsOpening extends Component {
    render() {
        return (
            <div className={`${styles.Opening}`}>
                <p className={`${styles.Head}`}>WAY TO SHARE</p>
                <p className={`${styles.wrapText}`} >Post items to share with the community.<br/> Reduce, reuse, recycle & live green!</p>
            </div>
        )
    }
}

export default ShareItemsOpening;