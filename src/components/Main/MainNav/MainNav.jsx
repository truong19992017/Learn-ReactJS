import React, { Component } from 'react';
import MainInfo from './MainInfo/MainInfo';
import MainFriend from './MainFriend/MainFriend';
import MainFriendPropose from './MainFriendPropose/MainFriendPropose';

class MainNav extends Component {
    render() {
        return (
            <div className="main--nav">
                <MainInfo/>
                <MainFriend/>
                <MainFriendPropose/>
            </div>
        );
    }
}

export default MainNav;