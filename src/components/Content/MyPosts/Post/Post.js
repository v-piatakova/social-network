import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/>
            {props.message}
            <div className={classes.actions}>
                <img src='https://cdn-icons-png.flaticon.com/512/535/535183.png'/>
                <span>like</span> {props.likes}
            </div>
        </div>
    )
}
export default Post;

