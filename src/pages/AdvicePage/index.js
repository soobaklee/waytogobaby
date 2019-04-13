import React from 'react';
import NewAdvicePage from '../NewAdvicePage';
// import adviceService from '../../utils/adviceService';

class AdvicePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            advice: []
        }
    }

    updateMessage = (msg) => {
        this.setState({ message: msg });
    }

    handleAddAdvice = (advice) => {
        this.setState((existingAdvice) => ({
            advice: [...existingAdvice.advice, advice]
        }))
    }

    handleUpdateAdvice = (advice) => {
        this.setState({ advice });
    }

    // async componentDidMount() {
    //     const advice = await adviceService.index();
    //     this.state.handleUpdateAdvice(advice);
    // }

    render(props) {
        let needAdvice = this.props.user ?
            <div>
                <p>Share your concern with the community </p>
                <NewAdvicePage
                    {...props}
                    user={this.props.user}
                    updateMessage={this.updateMessage}
                    handleAddAdvice={this.handleAddAdvice}
                />
                {this.state.updateMessage}
            </div>
            :
            <p>Login to share your concern with the community.</p>

        return (
            <div>

                {needAdvice}
            </div>
        )
    }
}

export default AdvicePage;