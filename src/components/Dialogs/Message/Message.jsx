import React from "react";
import messageStyle from './Message.module.css';

const Message = (props) => {
    const {message} = props;
    return (
        <div className={messageStyle.message}>{message}</div>
    )
}

export default Message;
