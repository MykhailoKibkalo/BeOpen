import React from "react";
import dialogStyle from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const {name, id} = props;
    const path = '/dialogs/' + id;
    return (
        <NavLink to={path} className={dialogStyle.dialog}>
            {name}
        </NavLink>
    )
}

export default Dialog;
