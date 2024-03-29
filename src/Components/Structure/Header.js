import React, {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../Context/AuthContext";

export default function Header(props) {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("buzzMe@user");
    navigate("/login");
    window.location.reload();
  };

  function addSidebarToggleMobileListener() {
    document
      .querySelector(".sidebar-toggle-mobile")
      .addEventListener("click", function () {
        var wrapper = document.getElementById("wrapper");
        wrapper.classList.toggle("sidebar-collapsed-mobile");
        if (wrapper.classList.contains("sidebar-collapsed")) {
          wrapper.classList.remove("sidebar-collapsed");
        }
      });
  }
  return (
    <>
      {/* Header Menu Area Start Here */}
      <div className="navbar navbar-expand-md header-menu-one bg-light">
        <div className="nav-bar-header-one">
          <div className="header-logo">
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/logo.png"}
                alt="logo"
                style={{width: "190px", height: "80px"}}
              />
            </a>
          </div>
          <div className="toggle-button sidebar-toggle">
            <button type="button" className="item-link" onClick={props.toggler}>
              <span className="btn-icon-wrap">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
        <div className="d-md-none mobile-nav-bar">
          <button
            className="navbar-toggler pulse-animation"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-navbar"
            aria-expanded="false"
            onClick={props.toggleSidebar}>
            <i className="far fa-arrow-alt-circle-down" />
          </button>
          <button
            type="button"
            className="navbar-toggler sidebar-toggle-mobile"
            onClick={addSidebarToggleMobileListener}>
            <i className="fas fa-bars" />
          </button>
        </div>
        <div
          className="header-main-menu collapse navbar-collapse"
          id="mobile-navbar">
          <ul className="navbar-nav">
            {/* <li className="navbar-item header-search-bar">
              <div className="input-group stylish-input-group">
                <span className="input-group-addon">
                  <button type="submit">
                    <span className="flaticon-search" aria-hidden="true" />
                  </button>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Find Something . . ."
                />
              </div>
            </li> */}
          </ul>
          <ul className="navbar-nav">
            <li className="navbar-item dropdown header-admin">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false">
                <div className="admin-title">
                  <h5 className="item-title">{user.admin?user.admin?.names:user.school_user?.names}</h5>
                  <span>{user.role?.role_name}</span>
                </div>
                <div className="admin-img">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/figure/user55.png"
                    }
                    style={{width:40}}
                    alt="Admin"
                  />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <div className="item-header">
                  <h6 className="item-title">{user.admin?user.admin?.names:user.school_user?.names}</h6>
                </div>
                <div className="item-content">
                  <ul className="settings-list">
                    <li>
                    <Link to={'/profile'}>
                    <i className="flaticon-user" />
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <Link onClick={onLogout}>
                        <i className="flaticon-turn-off" />
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* <li className="navbar-item dropdown header-message">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false">
                <i className="far fa-envelope" />
                <div className="item-title d-md-none text-16 mg-l-10">
                  Message
                </div>
                <span>0</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="item-header">
                  <h6 className="item-title">0 Message</h6>
                </div>
                <div className="item-content">
                  <div className="media">
                    <div className="item-img bg-skyblue author-online">
                      <img src="./assets/img/figure/student11.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Maria Zaman</span>
                          <span className="item-time">18:30</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-img bg-yellow author-online">
                      <img src="./assets/img/figure/student12.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Benny Roy</span>
                          <span className="item-time">10:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-img bg-pink">
                      <img src="./assets/img/figure/student13.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Steven</span>
                          <span className="item-time">02:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-img bg-violet-blue">
                      <img src="./assets/img/figure/student11.png" alt="img" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="item-title">
                        <a href="#">
                          <span className="item-name">Joshep Joe</span>
                          <span className="item-time">12:35</span>
                        </a>
                      </div>
                      <p>
                        What is the reason of buy this item. Is it usefull for
                        me.....
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="navbar-item dropdown header-notification">
              <a
                className="navbar-nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false">
                <i className="far fa-bell" />
                <div className="item-title d-md-none text-16 mg-l-10">
                  Notification
                </div>
                <span>8</span>
              </a>

              <div className="dropdown-menu dropdown-menu-right">
                <div className="item-header">
                  <h6 className="item-title">0 Notifiacations</h6>
                </div>
                <div className="item-content">
                  <div className="media">
                    <div className="item-icon bg-skyblue">
                      <i className="fas fa-check" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="post-title">Complete Today Task</div>
                      <span>1 Mins ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-icon bg-orange">
                      <i className="fas fa-calendar-alt" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="post-title">Director Metting</div>
                      <span>20 Mins ago</span>
                    </div>
                  </div>
                  <div className="media">
                    <div className="item-icon bg-violet-blue">
                      <i className="fas fa-cogs" />
                    </div>
                    <div className="media-body space-sm">
                      <div className="post-title">Update Password</div>
                      <span>45 Mins ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
      {/* Header Menu Area End Here */}
    </>
  );
}
