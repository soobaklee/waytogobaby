import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
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
            await userService.login(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            // alert('Invalid Credentials');
            this.props.updateMessage(err.message);
        }
    }

    render() {
        return (
            <div className="LoginPage">
                <header className="header">Welcome Back!</header>
                <form className="sform" onSubmit={this.handleSubmit}>
                    <div className="sform-line">
                        <label className="sform-label">Email:&nbsp;</label>                        
                        <input type="email" className="sform-input" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                    </div>
                    <div className="sform-line">
                        <label className="sform-label">Password:&nbsp;</label>                        
                        <input type="password" className="sform-input" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                    </div>
                    <div className="sform-line">
                        <button className="btn-enter">Log In</button>
                        <Link to='/' >Go Back</Link>
                    </div>
                </form>
            </div>
        );
    }

}

export default LoginForm;