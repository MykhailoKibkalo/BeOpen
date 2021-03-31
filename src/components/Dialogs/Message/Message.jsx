import React from "react";
import messageStyle from './Message.module.css';

const Message = (props) => {
    const {message} = props;

    const newMessage = React.createRef();
    const sendMessage = () => {
        const message = newMessage.current.value;
        alert(`Your message is ${message}`);
    }

    return (
        <div className={messageStyle.message}>
            {message}
            <input ref={newMessage} type='text'/>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default Message;
