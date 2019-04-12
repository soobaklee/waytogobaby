import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '', 
            password: '',
            passwordConf: '',
            phoneNo: '',
            city: '',
            state: '',
            birthdate: new Date().toLocaleString(),
            photo: ''
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
            await userService.signup(this.state);
            this.props.handleSignupOrLogin();
            this.props.history.push('/');
        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf && this.state.city && this.state.state);
    }

    render() {
        return (
            <div>
                <header className="header">Join the Community!</header>
                <form className="sform" onSubmit={this.handleSubmit}>
                    <table>
                        <tr className="sform-line">
                            <td className="sform-label">Name:&nbsp;</td>
                            <td><input autocomplete="off" type="text" className="sform-input" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">Email:&nbsp;</td>
                            <td><input autocomplete="off" type="email" className="sform-input" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">Password:&nbsp;</td>
                            <td><input autocomplete="off" type="password" className="sform-input" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">Confirm Password:&nbsp;</td>
                            <td><input autocomplete="off" type="password" className="sform-input" placeholder="Password Confirmation" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">Phone Number:&nbsp;</td>
                            <td><input autocomplete="off" type="tel" className="sform-input" placeholder="012-345-6789" value={this.state.phoneNo} name="phoneNo" required pattern="[0-9]{3}[-][0-9]{3}[-][0-9]{4}" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">City:&nbsp;</td>
                            <td><input autocomplete="off" type="text" className="sform-input" placeholder="City" value={this.state.city} name="city" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">State:&nbsp;</td>
                            <td><input autocomplete="off" type="text" className="sform-input" placeholder="State" value={this.state.state} name="state" required pattern="[A-Z|a-z]{2}" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">Birthdate:&nbsp;</td>
                            <td><input autocomplete="off" type="text" className="sform-input" placeholder="Birthdate" value={this.state.birthdate} name="birthdate" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <td className="sform-label">Photo:&nbsp;</td>
                            <td><input autocomplete="off" type="url" className="sform-input" placeholder="Photo" value={this.state.photo} name="photo" onChange={this.handleChange} /></td>
                        </tr>
                        <tr className="sform-line">
                            <button className="btn-enter" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                        <Link to='/'>Cancel</Link>
                        </tr>
                    </table>
                </form>
            </div>
        );
    }
}

export default SignupForm;