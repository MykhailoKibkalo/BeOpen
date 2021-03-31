import React from "react";
import postStyle from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const {postsData, newPostText, addPost, updateNewPostText} = props;

    const newPostElement = React.createRef();

    const onPostChange = () => {
        const text = newPostElement.current.value;
        updateNewPostText(text);
    }

    const addNewPost = () => {
        addPost();
    }
    return (
        <div className={postStyle.allPosts}>
            My post
            <div>

                    <input ref={newPostElement}
                           className={postStyle.input}
                           type='text'
                           onChange={onPostChange}
                           value={newPostText}/>
                    <button onClick={addNewPost}>New Post'</button>
            </div>
            {postsData.map(value => <Post message={value.message} likes={value.likes} key={value.id}/>)}
        </div>
    )
}

export default MyPosts;
