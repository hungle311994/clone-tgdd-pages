import "./CTTH.css";
import React from "react";
import { Link } from "react-router-dom";

const CTTH = () => {
  return (
    <div className="CTTH-wrapper">
      <div className="CTTH">
        <h3>CHUYÊN TRANG THƯƠNG HIỆU</h3>

        <div className="CTTH-content">
          <ul>
            <li>
              <Link>
                <img
                  src={require("../../assets/product/thuong-hieu/6BD1D926-AFFA-45E4-A5C6-DE9386EED1CB-390x210.png")}
                  alt=""
                />
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src={require("../../assets/product/thuong-hieu/lenovoLaptop-390x210-1.png")}
                  alt=""
                />
              </Link>
            </li>

            <li>
              <Link>
                <img
                  src={require("../../assets/product/thuong-hieu/samsung-390-210-390x210.png")}
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CTTH;
