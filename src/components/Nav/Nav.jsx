import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    let nav = props.user ?
        <ul>
            <li>Products</li>
            <li>Prod sub Diapers</li>
            <li>Prod sub Feeding</li>
            <li>Prod sub Toys</li>
            <li>Prod sub Travel Equipment</li>
            <li>Sharing is Caring</li>
            <li>Play Dates</li>
            <li><Link to='' onClick={props.handleLogout}>Log Out</Link></li>
        </ul>
        :
        <ul>
            <li>Products</li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
        </ul>

    return (
        <div>
            {nav}
        </div>
    )
}

export default Nav;