import React from 'react';
import { Link } from 'react-router-dom';
import adviceService from '../../utils/adviceService';
import styles from './AdvicePage.module.css';

class AdvicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            postedBy: '',
            advice: [],
            filterAdviceTopic: '',
        }
    }

    handleUpdateAdvice = (advice) => {
        this.setState({ advice });
    }

    filterNeedAdvice = () => {
        let filteredAdviceTopic = this.state.advice;
        if (this.state.filterAdviceTopic) filteredAdviceTopic = filteredAdviceTopic.filter(advice => advice.content.includes() === this.state.filterAdviceTopic);
        return filteredAdviceTopic;
    }



    async componentDidMount() {
        const advice = await adviceService.index();
        this.handleUpdateAdvice(advice);

    }

    render(props) {
        let adviceList = this.state.advice.map((advice, idx) => (
            <div className={`${styles.adviceList}`} key={idx}>
                <Link to={`/community/advice/${idx}`}>
                    <p>Concern: {advice.title}</p>
                    <p className={`${styles.content}`}>{advice.content}</p>
                    <p>Posted By: {advice.postedBy[0].name} on {advice.updatedAt}</p>
                </Link>
            </div>
        ));

        let userview = this.props.user ?
            <div>
                <h1>Take part in the community by encouraging others and through sharing your own concerns</h1>
                <Link to='/community/advice/new'><button className='submit-btn'>Share your concern</button></Link>
                {this.state.updateMessage}
                <div className={`${styles.adviceDiv}`}>
                    {adviceList}
                </div>
            </div>
            :
            <div>
                <div className={`${styles.adviceDiv}`}>
                    {adviceList}
                </div>
                <p>Login to share your concern with the community.</p>
            </div>

        return (
            <div classname={`${styles.advicePage}`}>
                {/* <div className="filterBox">
                    <label>Filter for: </label>
                    <input value={this.props.filterAdviceTopic} 
                    onChange={(e) => this.props.handleSetFilter('filterAdviceTopic', e.target.value)} 
                    required />
                </div> */}
                {userview}
            </div>
        )
    }
}

export default AdvicePage;