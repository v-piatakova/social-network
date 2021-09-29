import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header/Header.js';
import Navv from './components/Navv/Navv.js';
import Content from './components/Content/Profile.js';

import './components/Header/Header.module.css';
import './components/Navv/Navv.module.css';
import './components/Content/Profile.module.css';
import Dialogs from './components/Dialogs/Dialogs.js';
import './components/Dialogs/Dialogs.module.css';
import Friends from './components/Friends/Friends.js';
import News from './components/News/News.js';
import Photos from './components/Photos/Photos.js';
import Settings from './components/Settings/Settings.js';


const App = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navv/>
            <div className='app-wrapper-content'>
                <Route path='/profile' component = {Content}/>
                <Route path ='/friends' component  = {Friends}/>
                <Route path ='/dialogs' component  = {Dialogs}/>
                <Route path ='/photos' component  = {Photos}/>
                <Route path ='/news' component  = {News}/>
                <Route path ='/settings' component  = {Settings}/>

            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;

