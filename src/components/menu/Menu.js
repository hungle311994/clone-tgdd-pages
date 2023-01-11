import "./Menu.css";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Input } from "reactstrap";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

const Menu = () => {
  const navigate = useNavigate();
  const [option, setOption] = useState(true);
  const state = useSelector((state) => state);
  const numberOrder = state.productOrderRedux.numberOrder;

  const accountLogin = JSON.parse(localStorage.getItem("accountLogin"));

  const handleLogout = () => {
    console.log("click");
    localStorage.removeItem("accountLogin");
    alert("Đăng xuất thành công!!!");
    setTimeout(() => {
      navigate("/Login");
    }, 300);
  };

  return (
    <nav className="nav">
      <div className="nav-banner">
        <img
          src={require("../../assets/banner/1200-44-1200x44-10.png")}
          alt=""
        />
      </div>

      <div className="nav-direct-wrap">
        <div className="nav-direct">
          <NavLink className="nav-direct-item" to="/">
            <img
              src={require("../../assets/banner/TGDD-logo.png")}
              alt="Thegioididong-logo"
            />
          </NavLink>

          <NavLink className="nav-direct-item admin" to="/AdminContainer">
            Admin
          </NavLink>

          <div className="nav-direct-item search">
            <Input
              type="text"
              className="form-control "
              placeholder="Search..."
            />

            <Link className="search-icon">
              <ion-icon name="search-outline"></ion-icon>
            </Link>
          </div>

          <NavLink className="nav-direct-item order-history" to="/OrderHistory">
            Order History
          </NavLink>

          <NavLink className="nav-direct-item order-bag" to="/OrderBag">
            <span>
              <ion-icon name="cart-outline"></ion-icon>
            </span>
            <span>Your Order</span>
            <span className={numberOrder === 0 ? "inactive" : "active"}>
              {numberOrder}
            </span>
          </NavLink>

          <NavLink className="nav-direct-item about" to="/About">
            About
          </NavLink>

          <div
            className="nav-direct-item option"
            onClick={() => setOption(!option)}
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
                  {!accountLogin && (
                    <>
                      <NavLink className="option-detail" to="/Signup">
                        <ion-icon name="person-outline"></ion-icon>
                        <span>Sign Up</span>
                      </NavLink>

                      <NavLink className="option-detail" to="/Login">
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

      <MenuItem />
    </nav>
  );
};

export default Menu;
