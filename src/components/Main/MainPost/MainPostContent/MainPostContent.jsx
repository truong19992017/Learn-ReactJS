import React, { Component } from 'react';

class MainPostContent extends Component {
    render() {
        return (
            <div className="main--post--content">
                <div className="post--avatar">
                    <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" />
                </div>
                <div className="post--content">
                    <a>Lê Anh Trường</a>
                    <h5>21:16 21/12/2011</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Quos accusamus illum nihil perspiciatis eaque et possimus impedit,
                        architecto quisquam excepturi qui deleniti illo explicabo,
                        voluptate sit ipsam vitae cum sequi?
                    </p>
                    <div className="post--img">
                        <img src="https://i.pinimg.com/564x/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg" alt="" />
                    </div>
                </div>
                <div className="post--action">
                    <div className="post--action1">
                        <div className="post--action--like">
                            <i className="fas fa-heart" />
                        </div>
                        <h5>20k</h5>
                    </div>
                    <div className="post--action2">
                        <div className="post--action--comment">
                            <i className="fas fa-comment-dots" />
                        </div>
                        <h5>50k</h5>
                    </div>
                </div>
            </div>

        );
    }
}

export default MainPostContent;