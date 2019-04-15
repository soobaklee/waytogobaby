import React from 'react';
import styles from './AdviceDetailPage.module.css'
import moment from 'moment';


const AdviceDetailPage = props => {

    // console.log("Props in AdviceDetailPage", props)
    // console.log(props.match.params)

    let advice = props.advice.filter(advice => {
        return advice._id === props.match.params.id
    })[0]

    let adviceShow = advice ?
        <div className={`${styles.content}`}>
            <h1>Show Advice Details</h1>
            <h5>{advice.title}</h5>
            <h5>{advice.content}</h5>
            <h5>Shared by {advice.postedBy[0].name}, {moment(advice.postedBy[0].updatedAt).calendar()}</h5>
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