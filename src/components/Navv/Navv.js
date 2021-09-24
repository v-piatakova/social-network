import React from 'react';
import classes from './Navv.module.css';

const Navv = () => {
    return(
    <nav className={classes.nav}>
        <div className={classes.item}>
            <img src = 'https://cdn-icons-png.flaticon.com/512/747/747959.png'/> <a>Profile</a>
        </div>
        <div className={classes.item}>
            <img src = 'https://cdn-icons-png.flaticon.com/512/747/747835.png'/>  <a>Friends</a>
        </div>
        <div className={classes.item}>
            <img src = 'https://cdn-icons-png.flaticon.com/512/747/747828.png'/> <a>Messages</a>

        </div>
        <div className={classes.item}>
            <img src = 'https://cdn-icons-png.flaticon.com/512/747/747950.png'/> <a>Photos</a>
        </div>
        <div className={classes.item}>
            <img src = 'https://cdn-icons-png.flaticon.com/512/747/747938.png'/> <a>News</a>
        </div>
        <div className={classes.item}>
            <img src = 'https://cdn-icons-png.flaticon.com/512/747/747914.png'/> <a>Settings</a>
        </div>


    </nav>
    )
}

export default Navv;