import React from 'react';
import './App.css';
import './Variables.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';

const App = () => {
      return (
        <div className="app">
            <Header />
            <Main />
            <SideBar />
        </div>
    );
}

export default App;
