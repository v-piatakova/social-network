import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.photo}>
                    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/>
                </div>
                <div className={classes.photo}>
                    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/>
                </div>
                <div className={classes.photo}>
                    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/>
                </div>
                <div className={classes.photo}>
                    <img src='https://cdn-icons-png.flaticon.com/512/2919/2919600.png'/>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Everything</div>
                <div className={classes.message}>)))</div>
            </div>
        </div>
    )
}

export default Dialogs;