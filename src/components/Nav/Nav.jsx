import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = props => {
    let nav = props.user ?
        <div className={`${styles.Container}`}>
            <div className={`${styles.Nav}`}>
                <li><Link to='/products'>NECESSITIES</Link></li>
                <li><Link to='/community'>COMMUNITY</Link></li>
                <li><Link to='/playdates' >PLAYDATES</Link></li>
                <div className={`${styles.Menu}`}>
                    <li><Link to='/profile' className='Nav-welcome'>Hi {(props.user.name).toUpperCase()}</Link></li>
                    <div className={`${styles.Dropdown}`}>
                        <li className={`${styles.Profilelink}`}><Link to='/profile'>PROFILE</Link></li>
                        <li><Link to='' onClick={props.handleLogout} > LOG OUT</Link></li>
                    </div>
                </div>
            </div>
        </div>
        :
        <div className={`${styles.Container}`}>
            <ul className={`${styles.Nav}`}>
                <li><Link to='/products'>NECESSITIES</Link></li>
                <li><Link to='/community'>COMMUNITY</Link></li>
                <li><Link to='/login'>LOGIN</Link></li>
                <li><Link to='/signup'>SIGN UP</Link></li>
            </ul>
        </div>


    return (
        <div>
            {nav}
        </div>
    )
}

export default Nav;