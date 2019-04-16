import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = props => {
    let nav = props.user ?
        <div className={`${styles.Nav}`}>
            <button><Link to='/products'>NECESSITIES</Link></button>
            <button><Link to='/community'>COMMUNITY</Link></button>
            <button><Link to='/playdates' >PLAYDATES</Link></button>
            <div className={`${styles.Menu}`}>
                <button><Link to='/profile' className='Nav-welcome'>Hi {(props.user.name).toUpperCase()}</Link></button>
                <div className={`${styles.Dropdown}`}>
                    <Link to='/profile' >PROFILE</Link>
                    <Link to='' onClick={props.handleLogout} > LOG OUT</Link>
                </div>
            </div>
        </div>
        :
        <ul className={`${styles.Nav}`}>
            <li><Link to='/products'>NECESSITIES</Link></li>
            <li><Link to='/community'>COMMUNITY</Link></li>
            <li><Link to='/login'>LOGIN</Link></li>
            <li><Link to='/signup'>SIGN UP</Link></li>
        </ul>

    return (
        <div>
            {nav}
        </div>
    )
}

export default Nav;