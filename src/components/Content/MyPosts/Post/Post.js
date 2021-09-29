import React from 'react';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    return(
        <div >
            My posts
            <div>
                <textarea> </textarea>
                <button>Add post</button>

            </div>
            <div className={classes.posts}>New posts</div>
            <div>
                <div className={classes.item}>
                    <img src = 'https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
            </div>
        </div>
    )
}
export default MyPosts;

