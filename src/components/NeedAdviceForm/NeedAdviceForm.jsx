import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import adviceService from '../../utils/adviceService';


class NeedAdviceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            content: '',
            postedBy: this.props.user,
        }
    }


    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await adviceService.createAdvice(this.state);
            this.props.handleAddAdvice();
            this.props.history.push('/community/advice/:id');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.title && this.state.content);
    }

    render() {
        return (
            <div className="adviceForm-div">
                <form className="adviceForm" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Give your post a title" autoComplete="off" value={this.state.title} onChange={this.handleChange} /><br></br>
                    <textarea type="text" name="content" placeholder="Share your concern with the community here" autoComplete="off" value={this.state.content} onChange={this.handleChange} ></textarea><br></br>
                    <button id="submit-btn" type="submit" disabled={this.isFormInvalid()}>Share Concern</button>
                    <Link to='/community'>Cancel</Link>
                    <p>You are posting as {this.props.user.name}</p>
                </form>
            </div>
        )
    }
}

export default NeedAdviceForm;