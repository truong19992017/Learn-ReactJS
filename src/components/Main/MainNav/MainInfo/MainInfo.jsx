import React, { Component } from 'react';

class MainInfo extends Component {
    render() {
        return (
            <div className="main--nav--info">
                <a className="main--nav--info--home">
                    <i className="fas fa-home" />
                    <h2>Trang cá nhân</h2>
                </a>
                <a className="main--nav--info--friend">
                    <i className="fas fa-user-friends" />
                    <h2>Bạn bè</h2>
                </a>
            </div>
        );
    }
}

export default MainInfo;