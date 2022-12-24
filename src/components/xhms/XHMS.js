import React from "react";
import "./XHMS.css";
import { Link } from "react-router-dom";

const XHMS = () => {
  return (
    <div className="XHMS-wrapper">
      <div className="XHMS">
        <h3>XU HƯỚNG MUA SẮM</h3>

        <div className="XHMS-detail">
          <Link>
            <img
              src="https://cdn.tgdd.vn/2022/08/banner/Frame-4919-280x235.png"
              alt=""
            />
          </Link>

          <Link>
            <img
              src="https://cdn.tgdd.vn/2022/10/banner/xh-mac-desk-moi-280x235.png"
              alt=""
            />
          </Link>

          <Link>
            <img
              src="https://cdn.tgdd.vn/2022/09/banner/Frame-47574-280x235.png"
              alt=""
            />
          </Link>

          <Link>
            <img
              src="https://cdn.tgdd.vn/2022/10/banner/kidcare-s88-280x235.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default XHMS;
