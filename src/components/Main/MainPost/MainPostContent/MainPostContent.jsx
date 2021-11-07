import React, { Component } from 'react';

class MainPostContent extends Component {
    render() {
        const { name, avatarImg, date, content,
                img, sumLike, sumCmt } = this.props.data;
        return (
            <div className="main--post--content">
                <div className="post--avatar">
                    <img src={avatarImg} alt="" />
                </div>
                <div className="post--content">
                    <a>{name}</a>
                    <h5>{date}</h5>
                    <p>{content}</p>
                    <div className="post--img">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="post--action">
                    <div className="post--action1">
                        <div className="post--action--like">
                            <i className="fas fa-heart" />
                        </div>
                        <h5>{sumLike}K</h5>
                    </div>
                    <div className="post--action2">
                        <div className="post--action--comment">
                            <i className="fas fa-comment-dots" />
                        </div>
                        <h5>{sumCmt}K</h5>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPostContent;