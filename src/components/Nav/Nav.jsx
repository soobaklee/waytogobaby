import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = props => {
    let nav = props.user ?
        <ul className={`${styles.Nav}`}>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/community'>Sharing is Caring</Link></li>
            <li><Link to='/playdates' >Play Dates</Link></li>
            <li><Link to='/profile' className='Nav-welcome'>Hi, {props.user.name}</Link></li>
            <li><Link to='' onClick={props.handleLogout}> Log Out</Link></li>
        </ul>
        :
        <ul className={`${styles.Nav}`}>
            <li><Link to='/products'>Products</Link></li>
            <li><Link to='/community'>Community</Link></li>
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