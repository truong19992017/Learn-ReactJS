import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MainFriend extends Component {
    render() {
        return (
            <div className="main--nav--friend">
                <h3 className="main--nav--friend--title">danh sách bạn</h3>
                <Link to="/" className="main--nav--friend--content">
                    <div className="main--nav--friend--content--img">
                        <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"/></div>
                    <h2>Lê Văn Tèo</h2>
                </Link>
                <Link to="/" className="main--nav--friend--content">
                    <div className="main--nav--friend--content--img">
                        <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"/></div>
                    <h2>Lê Văn Tèo</h2>
                </Link>
                <Link to="/" className="main--nav--friend--content">
                    <div className="main--nav--friend--content--img">
                        <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg"/></div>
                    <h2>Lê Văn Tèo</h2>
                </Link>
                <div className="main--nav--friend--listall">
                    <a>Xem tất cả</a>
                </div>
            </div>

        );
    }
}

export default MainFriend;