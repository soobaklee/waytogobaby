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
        let adviceList = this.state.advice.slice(-6, -1).map((advice, idx) => (
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
                <h1>Community Discussion & <br /> Advice Board</h1>
                <Link to='/community/advice/'><button className='submit-btn'>COMMUNITY BOARD</button></Link>&nbsp;&nbsp;&nbsp;
                <Link to='/community/advice/new'><button className='submit-btn'>SHARE MY CONCERN</button></Link>
                <h3>Take part in the community by encouraging others and starting your own discussion</h3>
                {this.state.updateMessage}
                <div className={`${styles.adviceDiv}`}>
                    {adviceList}
                </div>
                <h3>Interested in more? Login or sign up to see the full discussion board.</h3>
            </div>
            :
            <div>
                <h1>Community Discussion & <br /> Advice Board</h1>
                <Link to='/login'><button className='submit-btn'>LOGIN TO LEARN MORE ABOUT YOUR COMMUNITY AND TO SHARE A CONCERN</button></Link>
                <div className={`${styles.adviceDiv}`}>
                    {adviceList}
                </div>
                <h3>Interested in more? Login or sign up to see the full discussion board.</h3>
            </div>

        return (
            <div className={`${styles.advicePage}`}>
                {userview}
            </div>
        )
    }
}

export default AdvicePagePartial;