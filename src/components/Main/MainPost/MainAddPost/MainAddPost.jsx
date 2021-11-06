import React, { Component } from 'react';

class MainAddPost extends Component {
    render() {
        return (
            <div className="add--post">
                <div className="add--post--input">
                    <textarea type="text" placeholder="Trường đang nghĩ gì?" defaultValue={""} />
                </div>
                <div className="add--post--action">
                    <div className="add--post--action--img">
                        <i style={{ color: '#45bd62' }} className="far fa-images" />
                        <h5>Hình ảnh</h5>
                    </div>
                    <div className="add--post--action--push">
                        <i style={{ color: 'rgb(255, 80, 80)' }} className="far fa-paper-plane" />
                        <h5>Đăng</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainAddPost;