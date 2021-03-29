import React from "react";
import navBarStyle from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={navBarStyle.nav}>

            <div className={navBarStyle.menu}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={navBarStyle.menu}>
                <NavLink to='/dialogs'>Message</NavLink>
            </div>
            <div className={navBarStyle.menu}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={navBarStyle.menu}>
                <NavLink to='/music'> Music</NavLink>
            </div>
            <div className={navBarStyle.menu}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>

        </nav>
    )
}

export default NavBar;
