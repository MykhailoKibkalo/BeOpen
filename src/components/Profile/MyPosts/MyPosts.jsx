import React from "react";
import postStyle from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div className={postStyle.allPosts}>
                My post
                <div>
                    <input className={postStyle.input} type='text'/>
                    <button >New Post</button>
                </div>
                  <Post message = 'Ivan'/>
                  <Post message = 'Liza'/>
            </div>
    )
}

export default MyPosts;
