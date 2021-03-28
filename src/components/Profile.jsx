import React from "react";
import profileStyle from './Profile.module.css';

const Profile = () => {
    const linkPhoto = 'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg';
    return (
        <div className={profileStyle.content}>
            <img
                src={linkPhoto} width='50%' height='60%' alt='Profile logo'/>

            <div>
                ava+desk
            </div>

            <div className={profileStyle.allPosts}>
                My post
                <div>
                    New post
                </div>
                    <div className={profileStyle.post}>
                        post1
                    </div>
                    <div className={profileStyle.post}>
                        post2
                    </div>
            </div>

        </div>
    )
}

export default Profile;
