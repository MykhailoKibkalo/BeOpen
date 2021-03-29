import React from "react";
import dialogsStyle from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const {dialogsData, messageData} = props;
    return (
        <div className={dialogsStyle.dialogs}>
            <div className={dialogsStyle.dialogItem}>
                {dialogsData.map(value => <Dialog name={value.name} id={value.id}/>)}
            </div>
            <div className={dialogsStyle.messages}>
                {messageData.map(value => <Message message={value.message} id={value.id}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
