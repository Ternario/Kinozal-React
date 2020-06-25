import React from 'react';
import './App.css';
import './Variables.scss'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';

const App = () => {
      return (
        <div className="app">
            <Header />
            <Main />
            <SideBar />
            <Footer />
        </div>
    );
}

export default App;
