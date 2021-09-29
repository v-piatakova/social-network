import React from 'react';
import classes from './Navv.module.css';
import {NavLink} from "react-router-dom";

const Navv = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747959.png'/> <NavLink to = '/profile' activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747835.png'/> <NavLink to= 'friends' activeClassName={classes.activeLink}>Friends</NavLink>
            </div>
            <div className={classes.item}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747828.png'/> <NavLink to = '/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>

            </div>
            <div className={classes.item}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747950.png'/> <NavLink to = 'photos' activeClassName={classes.activeLink}>Photos</NavLink>
            </div>
            <div className={classes.item}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747938.png'/> <NavLink to = 'news' activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747914.png'/> <NavLink to = 'settings' activeClassName={classes.activeLink}>Settings</NavLink>
            </div>

        </nav>
    )
}

export default Navv;