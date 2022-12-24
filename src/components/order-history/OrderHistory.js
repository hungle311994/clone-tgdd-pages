import React from "react";
import "./OrderHistory.css";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <div className="order-history-container">
      <div className="order-history-icon">
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>
      <span>Không có lịch sử đơn hàng</span>
      <Link to="/HomeContainer" className="go-homepage">
        <div>VỀ TRANG CHỦ</div>
      </Link>
      <span>
        Khi cần trợ giúp vui lòng gọi <Link> 1800.1060</Link> hoặc
        <Link> 028.3622.1060</Link> (7h30-22h)
      </span>
    </div>
  );
};

export default OrderHistory;
