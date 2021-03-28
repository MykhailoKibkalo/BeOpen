import React from "react";
import logo from '../logo/logoNname-removebg-preview.png';
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <img src={logo} alt='logo'/>
        </header>

    //className={`${headerStyle.header} ${headerStyle.ANOTHER_CLASS}`}>  ------ how to apply a few class to one tag

    )
}

export default Header;
