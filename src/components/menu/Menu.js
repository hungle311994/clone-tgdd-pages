import "./Menu.css";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container, Input } from "reactstrap";
import MenuItem from "./MenuItem";

const Menu = () => {
  const navigate = useNavigate();
  const [navItem, setNavItem] = useState(true);
  const [option, setOption] = useState(true);

  const accountLogin = JSON.parse(localStorage.getItem("accountLogin"));

  const handleClickAdmin = () => {
    setNavItem(false);
  };

  const handleOption = () => {
    setTimeout(() => {
      setOption((prev) => !prev);
    }, 100);
  };

  const handleLogout = () => {
    setNavItem(true);
    localStorage.removeItem("accountLogin");
    alert("Đăng xuất thành công!!!");
    setTimeout(() => {
      navigate("/Login");
    }, 300);
  };

  return (
    <nav className="nav">
      <Container className="nav-container">
        <div className="nav-banner">
          <img
            src={require("../../assets/banner/1200-44-1200x44-11.png")}
            alt=""
          />
        </div>

        <div className="nav-content-wrapper">
          <div className="nav-content">
            <NavLink
              className="nav-item"
              to="/HomeContainer"
              onClick={() => setNavItem(true)}
            >
              <img
                src={require("../../assets/banner/TGDD-logo.png")}
                alt="Thegioididong-logo"
              />
            </NavLink>

            <NavLink
              className="nav-item admin"
              to="/AdminContainer"
              onClick={handleClickAdmin}
            >
              Admin
            </NavLink>

            <div className="nav-item search" onClick={() => setNavItem(true)}>
              <Input
                type="text"
                className="form-control "
                placeholder="Bạn tìm gì..."
              />

              <Link className="search-icon">
                <ion-icon name="search-outline"></ion-icon>
              </Link>
            </div>

            <NavLink
              className="nav-item history"
              to="/OrderHistory"
              onClick={() => setNavItem(true)}
            >
              Lịch sử đơn hàng
            </NavLink>

            <NavLink
              className="nav-item bag"
              to="/OrderBag"
              onClick={() => setNavItem(true)}
            >
              <ion-icon name="bag-outline"></ion-icon>
              <span>Giỏ hàng</span>
            </NavLink>

            <NavLink
              className="nav-item about"
              to="/About"
              onClick={() => setNavItem(true)}
            >
              Liên hệ
            </NavLink>

            <div
              className="nav-item-option"
              onClick={handleOption}
              onMouseLeave={() => setOption(true)}
            >
              {option && (
                <span className="option-icon">
                  <ion-icon name="reorder-three-outline"></ion-icon>
                </span>
              )}

              {!option && (
                <>
                  <span className="option-icon">
                    <ion-icon name="close-outline"></ion-icon>
                  </span>

                  <div className="option-details">
                    <span className="arrow">
                      <ion-icon name="caret-up-outline"></ion-icon>
                    </span>

                    {!accountLogin && (
                      <>
                        <NavLink
                          className="option-detail"
                          to="/Signup"
                          onClick={() => setNavItem(true)}
                        >
                          <ion-icon name="person-outline"></ion-icon>
                          <span>Sign Up</span>
                        </NavLink>

                        <NavLink
                          className="option-detail"
                          to="/Login"
                          onClick={() => {
                            setNavItem(true);
                          }}
                        >
                          <ion-icon name="log-in-outline"></ion-icon>
                          <span>Login</span>
                        </NavLink>
                      </>
                    )}

                    {accountLogin && (
                      <>
                        <NavLink className="option-detail">
                          <ion-icon name="people-outline"></ion-icon>
                          <span>Profile</span>
                        </NavLink>

                        <NavLink
                          className="option-detail"
                          to="/Login"
                          onClick={handleLogout}
                        >
                          <ion-icon name="log-out-outline"></ion-icon>
                          <span>Log out</span>
                        </NavLink>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {navItem && <MenuItem />}
      </Container>
    </nav>
  );
};

export default Menu;
