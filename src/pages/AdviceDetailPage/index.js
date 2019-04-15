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
            // responses: [],
        }
    }

    async componentDidMount() {
        let adviceId = this.state.advice_id;
        adviceId = await adviceService.show(this.state.title);
        console.log(adviceId);
        // adviceService.show(adviceId).then((json) => {
        //     this.setState({
        //         id: json.id,
        //         title: json.title,
        //         content: json.content,
        //         postedBy: json.postedBy,
        //         // responses: json.responses
        //     });
        // });
    }


    render(props) {
        return (
            <div>
                <h5>{this.state.title}</h5><hr></hr>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default AdviceDetailPage;