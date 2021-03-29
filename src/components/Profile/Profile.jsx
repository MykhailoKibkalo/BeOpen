import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    const {postsData} = props;
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}

export default Profile;
