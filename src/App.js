 import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
 import Navv from './components/Navv/Navv.js'
 import Content from './components/Content/Content.js'
 import './components/Header/Header.module.css';
import './components/Navv/Navv.module.css';
import './components/Content/Content.module.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navv/>
            <Content/>
        </div>
    );
}

export default App;

