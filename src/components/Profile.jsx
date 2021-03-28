import React from "react";


const Profile = () => {
    const linkPhoto = 'https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg';
    return (
        <div className='content'>
            <img
                src={linkPhoto} width='50%' height='60%' alt='Profile logo'/>

            <div>
                ava+desk
            </div>

            <div>
                my post
                <div>
                    New post
                </div>
                <div>
                    <div>
                        post1
                    </div>
                    <div>
                        post2
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;
