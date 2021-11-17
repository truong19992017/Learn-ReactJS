import React, { Component } from "react";
import './MainInfo.css'
import { Outlet } from "react-router-dom";

class MainInfo extends Component {
  render() {
    return (
      <div className="main--info">
        <div className="main--info--content">
          <div className="main--info--content1">
            <div className="main--info--content1--avatar">
              <img
                src="https://i2.wp.com/scr.vn/wp-content/uploads/2020/07/avt-cute.jpg?resize=575%2C575&ssl=1"
                alt
              />
            </div>
            <div className="main--info--content1--contact">
              <h1>Le Anh Truong</h1>
            </div>
          </div>
          <h2 className="main--info--content2">
            <div className="main--info--content2--munber">
              <strong>10</strong>
              <span>Post</span>
            </div>
            <div className="main--info--content2--munber">
              <strong>10</strong>
              <span>friend</span>
            </div>
          </h2>
          <div className="main--info--content3">
            <div className="main--info--content3--post">
              <a href>Post</a>
            </div>
          </div>
        </div>
        <div className="main--info--post">
          <div className="main--info--post--content">
            <div className="post--avatar">
              <img
                src="https://i2.wp.com/scr.vn/wp-content/uploads/2020/07/avt-cute.jpg?resize=575%2C575&ssl=1"
                alt
              />
            </div>
            <div className="post--content">
              <a href>Lê Anh Trường</a>
              <h5>21:16 21/12/2011</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                accusamus illum nihil perspiciatis eaque et possimus impedit,
                architecto quisquam excepturi qui deleniti illo explicabo,
                voluptate sit ipsam vitae cum sequi?
              </p>
              <div className="post--img">
                <img
                  src="https://i.pinimg.com/originals/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg"
                  alt
                />
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
          <div className="main--info--post--content">
            <div className="post--avatar">
              <img
                src="https://i2.wp.com/scr.vn/wp-content/uploads/2020/07/avt-cute.jpg?resize=575%2C575&ssl=1"
                alt
              />
            </div>
            <div className="post--content">
              <a href>Lê Anh Trường</a>
              <h5>21:16 21/12/2011</h5>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                accusamus illum nihil perspiciatis eaque et possimus impedit,
                architecto quisquam excepturi qui deleniti illo explicabo,
                voluptate sit ipsam vitae cum sequi?
              </p>
              <div className="post--img">
                <img
                  src="https://i.pinimg.com/originals/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg"
                  alt
                />
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
        </div>
      </div>
    );
  }
}

export default MainInfo;