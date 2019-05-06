import React from 'react';
import {Link} from 'react-router-dom';
class NewShareItemForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            category: '',
            title: '',
            description: '',
            photo: '',
            creator: ''
        }
    }


    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await adviceService.createAdvice(this.state);
    //         this.props.handleAddAdvice();
    //         this.props.history.push('/community/advice/:id');
    //     } catch (err) {
    //         this.props.updateMessage(err.message);
    //     }
    // }

    isFormInvalid() {
        return !(this.state.title && this.state.content);
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