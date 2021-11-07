import React, { Component } from 'react';
import MainAddPost from './MainAddPost/MainAddPost';
import MainPostContent from './MainPostContent/MainPostContent';
import { Consumer } from '../../../Data'; 

class MainPost extends Component {
    render() {
        return (
            <div className="main--post">
                <MainAddPost/>
                <Consumer>
                    {value => {
                        const { post } = value;
                        return(
                            <React.Fragment>
                                {post.map((item, index) => {
                                    return (
                                    <MainPostContent
                                        key={index}
                                        data={item}
                                    />)
                                })}
                            </React.Fragment>
                        )
                    }}
                </Consumer>
            </div>
        );
    }
}

export default MainPost;