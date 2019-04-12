import React from 'react';
import { Redirect, Link } from 'react-router-dom';
// import ReactIntl from 'react-intl';

// var IntlMixin = ReactIntl.IntlMixin;
// var FormattedDate = ReactIntl.FormattedDate;

const Profile = props => {

    // mixins: [IntlMixin];

    let profile = props.user ?
        <div>
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
                    <td>{props.user.birthdate}</td>
                </tr>
            </table>
        </div>
        :
        <div>
            <h1>No User Detected</h1>
            {/* <Redirect to='/login' />  */}
        </div>

    return (
        <div>
            {profile}
            <div>
                <p>
                    Placeholder
                    {/* <FormattedDate
                        value={props.user.birthdate}
                        day="numeric"
                        month="long"
                        year="numeric" /> */}
                </p>

            </div>
        </div>
    )
}

export default Profile;