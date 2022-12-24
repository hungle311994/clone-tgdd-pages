import "./DVTI.css";
import React from "react";
import { Link } from "react-router-dom";

const DVTI = () => {
  return (
    <div className="DVTI-wrapper">
      <div className="DVTI">
        <div className="DVTI-tilte">
          <h3>DỊCH VỤ TIỆN ÍCH</h3>

          <Link className="DVTI-tilte-link">
            <span>XEM THÊM</span>
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </Link>
        </div>

        <ul className="DVTI-content">
          <li className="DVTI-item">
            <div className="DVTI-item-icon">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="DVTI-item-detail">
              <span>Mua Mã thẻ cào</span>
              <p>
                <span>Giảm 3%</span> cho mệnh giá từ 100.000 trở lên
              </p>
            </div>
          </li>

          <li className="DVTI-item">
            <div className="DVTI-item-icon">
              <ion-icon name="flash-outline"></ion-icon>
            </div>

            <div className="DVTI-item-detail">
              <span>Dịch vụ đóng tiền</span>
              <p>Điện, Nước, Internet, Cước điện thoại trả sau</p>
            </div>
          </li>

          <li className="DVTI-item">
            <div className="DVTI-item-icon">
              <ion-icon name="game-controller-outline"></ion-icon>
            </div>

            <div className="DVTI-item-detail">
              <span>Mua thẻ game</span>
              <p>
                <span>Giảm 2%</span> cho tất cả nhà mạng, áp dụng cho mệnh giá
                từ 300.000 trở lên
              </p>
            </div>
          </li>

          <li className="DVTI-item">
            <div className="DVTI-item-icon">
              <ion-icon name="ticket-outline"></ion-icon>
            </div>

            <div className="DVTI-item-detail">
              <span>Vé máy bay, tàu</span>
              <p>Thu hộ tiền vé xe, vé tàu, vé máy bay</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DVTI;
