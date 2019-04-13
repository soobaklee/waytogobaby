import React from 'react';
import NewAdvicePage from '../NewAdvicePage';
import adviceService from '../../utils/adviceService';

class AdvicePage extends React.Component {
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
    }

    render(props) {
        let adviceList = this.state.advice.map((advice, idx) => (
            <p key={idx}>{advice.title}<br></br>{advice.content}</p>
        ));

        let needAdvice = this.props.user ?
            <div>
                <h1>Join the community by helping others with their concerns and by sharing yours </h1>
                <NewAdvicePage
                    {...props}
                    user={this.props.user}
                    updateMessage={this.updateMessage}
                    handleAddAdvice={this.handleAddAdvice}
                />
                {this.state.updateMessage}
                <div className="adviceList">
                    {adviceList}
                </div>
            </div>
            :
            <div>
                <div className="adviceList">
                    {adviceList}
                </div>
                <p>Login to share your concern with the community.</p>
            </div>

        return (
            <div>

                {needAdvice}
            </div>
        )
    }
}

export default AdvicePage;