import React from "react";
import postStyle from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const {postsData} = props;
    return (
            <div className={postStyle.allPosts}>
                My post
                <div>
                    <input className={postStyle.input} type='text'/>
                    <button >New Post</button>
                </div>
                {postsData.map(value => <Post message={value.message} likes={value.likes} key={value.id}/>)}
            </div>
    )
}

export default MyPosts;
