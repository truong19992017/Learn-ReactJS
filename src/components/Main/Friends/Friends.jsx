import React from "react";
import "./Friends.css"

const Friends = () => {
  return (
    <div className="friends">
      <div className="friend">
        <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" />
        <a>le anh truong</a>
        <div className="acctionFriend">
          <button className="mess">Nhắn tin</button>
          <button className="deleteFriend">Hủy kết bạn</button>
        </div>
      </div>
      <div className="friend">
        <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" />
        <a>le anh truong</a>
        <div className="acctionFriend">
          <button className="mess">Nhắn tin</button>
          <button className="deleteFriend">Hủy kết bạn</button>
        </div>
      </div>
      <div className="friend">
        <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" alt="" />
        <a>le anh truong</a>
        <div className="acctionFriend">
          <button className="mess">Nhắn tin</button>
          <button className="deleteFriend">Hủy kết bạn</button>
        </div>
      </div>
    </div>
  );
};

export default Friends;
