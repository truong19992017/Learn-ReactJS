import React, { Component } from 'react';
import { Link } from "react-router-dom"

class MainInfo extends Component {
    render() {
        return (
            <div className="main--nav--info">
                <Link to="/info" className="main--nav--info--home">
                    <i className="fas fa-home" />
                    <h2>Trang cá nhân</h2>
                </Link>
                <a className="main--nav--info--friend">
                    <i className="fas fa-user-friends" />
                    <h2>Bạn bè</h2>
                </a>
            </div>
        );
    }
}

export default MainInfo;