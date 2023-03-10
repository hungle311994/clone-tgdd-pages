import React from "react";
import "./Option.css";
import { Link } from "react-router-dom";

const Option = () => {
  return (
    <div className="option">
      <ul>
        <li>
          <Link>
            <img
              src={require("../../assets/banner/slide/icon--96x104-1.png")}
              alt="icon1"
            />
            <span>Săn Sale Online</span>
          </Link>
        </li>

        <li>
          <Link>
            <img
              src={require("../../assets/banner/slide/icon--96x104-2.png")}
              alt="icon1"
            />
            <span>Điện thoại độc quyền</span>
          </Link>
        </li>

        <li>
          <Link>
            <img
              src={require("../../assets/banner/slide/icon--96x104-3.png")}
              alt="icon1"
            />
            <span>Laptop xả kho</span>
          </Link>
        </li>

        <li>
          <Link>
            <img
              src={require("../../assets/banner/slide/icon--96x104-4.gif")}
              alt="icon1"
            />
            <span>
              Máy cũ
              <br />
              Giảm đến 50%
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Option;
