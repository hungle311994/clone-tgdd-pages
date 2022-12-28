import "./OrderBag.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDate } from "../../helper/getDate";
import { getNumberOfPrice, VND } from "../../helper/calcPrices";

const OrderBag = () => {
  const state = useSelector((state) => state);
  const productOrderList = state.productOrderRedux.productOrderList;

  if (!productOrderList.length) {
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
  }

  if (productOrderList.length) {
    const price = productOrderList.map((item) => getNumberOfPrice(item.price));
    const totalPrice = VND.format(price.reduce((a, b) => a + b));

    return (
      <div className="order-bag-wrap">
        <div className="order-bag">
          <div className="order-header">
            <h2>CHI TIẾT ĐẶT HÀNG</h2>
            <span>Ngày đặt hàng: {getDate()}</span>
          </div>

          <div className="order-content">
            {productOrderList.map((item, idx) => (
              <div className="order-item" key={idx}>
                <div className="order-infor">
                  <div className="image">
                    <img
                      src={require(`../../assets/product/${item.imageName}`)}
                      alt=""
                    />
                  </div>

                  <div className="details">
                    <span className="name">{item.name}</span>

                    <div className="element">
                      <span>{item.manufacturerName}</span>
                      <span>{item.categoryName}</span>
                    </div>
                  </div>
                </div>

                <div className="order-prices">
                  <span className="price">{item.price}</span>
                  <span className="qty">Qty: 1</span>
                </div>
              </div>
            ))}
          </div>

          <div className="order-footer">
            <div className="total">
              <span>Tổng tiền:</span>
              <span>{totalPrice}</span>
            </div>

            <button>THANH TOÁN </button>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderBag;
