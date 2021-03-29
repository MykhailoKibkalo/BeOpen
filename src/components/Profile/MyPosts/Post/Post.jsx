import React from "react";
import postStyle from './Post.module.css';
import testAvatar from '../../../../logo/favicon1.png';

const Post = (props) => {
    const {message, likes} = props;
    return (
        <div className={postStyle.post}>
            <img src={testAvatar} alt='avatar'/>
            <span> {message} </span>
            <span> Likes: {likes} </span>

        </div>
    )
}

export default Post;
