import React from 'react';
import classes from './MyPosts.module.css';
import './Post/Post.module.css';
import Post from './Post/Post.js';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>

            </div>
            <div className={classes.posts}>New posts</div>
            <div>
                <Post message='Hi, how are you?' likes='15'/>
                <Post message='It is my first post' likes='20'/>
            </div>
        </div>
    )
}
export default MyPosts;

