import "./OrderBag.css";
import React from "react";
import { Link } from "react-router-dom";

const OrderBag = () => {
  return (
    <div className="order-bag-wrap">
      <div className="order-bag-icon">
        <ion-icon name="close-circle-outline"></ion-icon>
      </div>

      <span>Không có sản phẩm nào trong giỏ hàng</span>

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

export default OrderBag;
