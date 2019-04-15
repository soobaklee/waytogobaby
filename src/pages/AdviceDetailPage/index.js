import React from 'react';
// import styles from './AdviceDetailPage.module.css'
import adviceService from '../../utils/adviceService';

class AdviceDetailPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            postedBy: '',
            responses: [],
        }
    }

    async componentDidMount() {
        let adviceId = await adviceService.show(this.state.advice);
        console.log(adviceId);
        adviceService.show(adviceId).then((json) => {
            this.setState({
                id: adviceId[0]._id,
                title: adviceId[0].title,
                // content: json.content,
                // postedBy: json.postedBy,
                // responses: json.responses
            });
        });
    }


    render(props) {
        return (
            <div>
                <h5>{this.props.title}</h5><hr></hr>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default AdviceDetailPage;