import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {postsData, addPost, newPostText, updateNewPostText} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
                     addPost={addPost}
                     newPostText={newPostText}
                     updateNewPostText={updateNewPostText}/>
        </div>
    )
}

export default Profile;
