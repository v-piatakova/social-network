import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.js';
import './MyPosts/MyPosts.module.css';

const Profile = () => {
    return (
        <div className={classes.all}>
            <div className={classes.content}>
                <div>
                    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/> + description
                </div>
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>

    )
}
export default Profile;

