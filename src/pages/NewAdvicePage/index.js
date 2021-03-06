import React from 'react';
import NeedAdviceForm from '../../components/NeedAdviceForm/NeedAdviceForm';
// import adviceService from '../../utils/adviceService';

class NewAdvicePage extends React.Component {
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


    render(props) {
        let needAdvice = this.props.user ?
            <div>
                <p>Share your concern with the community </p>
                <NeedAdviceForm
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

export default NewAdvicePage;