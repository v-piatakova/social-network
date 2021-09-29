import React from 'react';
import classes from './Content.module.css';

const Content = () => {
    return(
    <div className={classes.content}>
        <div>
            <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/> + description
        </div>
        <div >
            My posts
            <div className={classes.posts}>New posts</div>
            <div>
                <div className={classes.item}>post 1</div>
                <div className={classes.item}>post 2</div>
            </div>
        </div>
    </div>
    )
}
export default Content;

