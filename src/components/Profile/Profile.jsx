import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {postsData, addPost} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}
                     addPost={addPost}/>
        </div>
    )
}

export default Profile;
