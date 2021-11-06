import React, { Component } from 'react';
import MainAddPost from './MainAddPost/MainAddPost';
import MainPostContent from './MainPostContent/MainPostContent';

class MainPost extends Component {
    render() {
        return (
            <div className="main--post">
                <MainAddPost/>
                <MainPostContent/>
                <MainPostContent/>
                <MainPostContent/>
                <MainPostContent/>
            </div>
        );
    }
}

export default MainPost;