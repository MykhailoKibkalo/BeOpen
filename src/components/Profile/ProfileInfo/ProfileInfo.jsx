import React from "react";
import profileInfoStyle from './ProfileInfo.module.css';

const ProfileInfo = () => {
    const linkPhoto = 'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg';
    return (
        <div>
            <img src={linkPhoto} width='50%' height='60%' alt='Post logo'/>
            <div className={profileInfoStyle.descriptionBlock}>
                ava+desk
            </div>
        </div>
    )
}

export default ProfileInfo;
