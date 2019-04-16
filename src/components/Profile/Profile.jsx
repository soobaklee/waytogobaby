import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';

const Profile = props => {

    let profile = props.user ?
        <div className='Profile-display'>
            <h1>{props.user.name}'s Profile</h1>
            <table>
                <tr>
                    <td>Email:</td>
                    <td>{props.user.email}</td>
                </tr>
                <tr>
                    <td>Community:</td>
                    <td>{props.user.city}, {props.user.state}</td>
                </tr>
                <tr>
                    <td>Birthdate:</td>
                    <td>{moment(props.user.birthdate).format('LL')}</td>
                </tr>
            </table>
        </div>
        :
        <div className='Profile-display'>
            {/* <h1>No User Detected</h1> */}
            <Redirect to='/login' /> 
        </div>

    return (
        <div>
            {profile}
            <div>

            </div>
        </div>
    )
}

export default Profile;