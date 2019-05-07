import React from 'react';
import { Link } from 'react-router-dom';
import shareService from '../../utils/shareService';


class NewShareItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            category: '',
            title: '',
            description: '',
            photo: '',
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
        var item = {
            title: this.state.title,
            description: this.state.description,
            postedBy: this.props.user
        };
        shareService.createItem(item);
        this.props.history.push('/');
        this.setState({
            title: '',
            description: ''
        })
    }

    isFormInvalid() {
        return !(this.state.title && this.state.description);
    }

    render() {
        return (
            <div className="newShareForm-div">
                <form className="shareForm" onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Item Name" autoComplete="off" value={this.state.title} onChange={this.handleChange} /><br></br>
                    <textarea type="text" name="description" placeholder="Share your item with the community here" autoComplete="off" value={this.state.description} onChange={this.handleChange} ></textarea><br></br>
                    <button id="submit-btn" type="submit" disabled={this.isFormInvalid()}>Share</button>
                    <Link to='/community'>Cancel</Link>
                </form>
            </div>
        )
    }


}

export default NewShareItemForm;