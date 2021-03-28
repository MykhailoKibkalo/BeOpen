import React from "react";
import navBarStyle from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={navBarStyle.nav}>

            <div className={navBarStyle.menu}>
                <a>Profile</a>
            </div>
            <div className={navBarStyle.menu}>
                <a>Message</a>
            </div>
            <div className={navBarStyle.menu}>
                <a>News</a>
            </div>
            <div className={navBarStyle.menu}>
                <a>Music</a>
            </div>
            <div className={navBarStyle.menu}>
                <a>Settings</a>
            </div>

        </nav>
    )
}

export default NavBar;
