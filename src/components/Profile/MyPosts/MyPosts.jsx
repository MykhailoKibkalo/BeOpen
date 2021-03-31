import React from "react";
import postStyle from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const {postsData} = props;

    const newPostElement = React.createRef();

    const addPost = () => {
         const text = newPostElement.current.value;
         props.addPost(text);


    }
    return (
        <div className={postStyle.allPosts}>
            My post
            <div>
                <input ref={newPostElement} className={postStyle.input} type='text'/>
                <button onClick={addPost}>New Post</button>
            </div>
            {postsData.map(value => <Post message={value.message} likes={value.likes} key={value.id}/>)}
        </div>
    )
}

export default MyPosts;
