import React from 'react';
import styles from './AdviceDetailPage.module.css'
import moment from 'moment';


const AdviceDetailPage = props => {

    // console.log("Props in AdviceDetailPage", props)
    // console.log(props.match.params)

    let adviceLU = props.advice.filter(advice => {
        return advice._id === props.match.params.id
    })[0]

    let adviceShow = adviceLU ?
        <div className={`${styles.content}`}>
            <h1>Join the discussion...</h1>
            <h3>Shared by {adviceLU.postedBy[0].name}, {moment(adviceLU.postedBy[0].updatedAt).calendar()}</h3>
            <h1>{adviceLU.title}</h1>
            <h3>{adviceLU.content}</h3>
        </div>
        :
        <div>Waiting to Load</div>
    return (

        <div>
            {/* <h1>Show Advice Details</h1>
            <h5>{advice.title}</h5><hr></hr>
            <h5>{advice.content}</h5><hr></hr>
            <h5>{advice.postedBy}</h5><hr></hr> */}
            {adviceShow}
        </div>
    )
    // }
}

export default AdviceDetailPage;