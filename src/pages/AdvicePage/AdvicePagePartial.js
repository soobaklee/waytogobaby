import React from 'react';
import { Link } from 'react-router-dom';
import adviceService from '../../utils/adviceService';
import moment from 'moment';
import styles from './AdvicePage.module.css';


class AdvicePagePartial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adviceId: '',
            title: '',
            content: '',
            postedBy: '',
            advice: []
        }
    }

    handleUpdateAdvice = (advice) => {
        this.setState({ advice });
    }

    async componentDidMount() {
        const advice = await adviceService.index();
        this.handleUpdateAdvice(advice);
        console.log(advice);
    }

    render(props) {
        let adviceList = this.state.advice.slice(0, 5).map((advice, idx) => (
            <div className={`${styles.adviceList}`} key={idx}>
                <Link to={`/community/advice/${advice._id}`}>
                    <p>Concern: {advice.title}</p>
                    <p className={`${styles.content}`}>{advice.content}</p>
                    <p>Posted by {advice.postedBy[0].name} on {moment(advice.updatedAt).format('LL')}</p>
                </Link>
            </div>
        ));

        let userview = this.props.user ?
            <div>
                <h1>Take part in the community by encouraging others and through sharing your own concerns</h1>
                <Link to='/community/advice/new'><button className='submit-btn'>Share your concern</button></Link>
                <Link to='/community/advice/'><button className='submit-btn'>See more of the community</button></Link>
                {this.state.updateMessage}
                <div className={`${styles.adviceDiv}`}>
                    {adviceList}
                </div>
            </div>
            :
            <div>
                <Link to='/login'><p>Login to see more of the community and to share your concern with the community.</p></Link>
                <div className={`${styles.adviceDiv}`}>
                    {adviceList}
                </div>
            </div>

        return (
            <div className={`${styles.advicePage}`}>
                {userview}
            </div>
        )
    }
}

export default AdvicePagePartial;