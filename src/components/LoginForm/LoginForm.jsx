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

    isFormInvalid() {
        return !(this.state.email && this.state.password);
    }

    render() {
        return (
            <div className="LoginPage">
                <h1 className="header">Welcome Back!</h1>
                <form className="sform" onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr className="sform-line">
                                <td><label className="sform-label">Email:&nbsp;</label></td>
                                <td><input type="email" className="sform-input" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /></td>
                            </tr>
                            <tr className="sform-line">
                                <td><label className="sform-label">Password:&nbsp;</label></td>
                                <td><input type="password" className="sform-input" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} /></td>
                            </tr>
                            <tr className="form-btn-line">
                                <td></td>
                                <td><button className="submit-btn" disabled={this.isFormInvalid()}>Log In</button>&nbsp;
                                <Link to='/' ><button className="submit-btn" id="Go-back">Go Back</button></Link></td>
                            </tr>   
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }

}

export default LoginForm;