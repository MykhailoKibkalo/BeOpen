import React from "react";
import profileStyle from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    const linkPhoto = 'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg';
    return (
        <div className={profileStyle.content}>
            <img
                src={linkPhoto} width='50%' height='60%' alt='Post logo'/>

            <div>
                ava+desk
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;
