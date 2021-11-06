import React, { Component } from 'react';
import "./Main.css";
import MainNav from './MainNav/MainNav';
import MainPost from './MainPost/MainPost';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <MainNav/>
                <MainPost/>
            </div>
        );
    }
}

export default Main;