import React, { Component } from 'react';
import './Header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header--main">
                    <Link to="/" className="header--logo">
                        <img src="https://sf16.byteicdn.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" alt="logo" />
                    </Link>
                    <div className="header--search">
                        <form className="header--search--form" action="">
                            <input className="header--search--form--input" placeholder="tìm kiếm tài khoản" type="text" />
                            <button className="header--search--form--button">
                                <i className="fas fa-search" />
                            </button>
                        </form>
                    </div>
                    <div className="header--nav">
                        <div className="header--nav--mess"><i className="far fa-paper-plane" /></div>
                        <div className="header--nav--avatar"><img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="avatar" /></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;