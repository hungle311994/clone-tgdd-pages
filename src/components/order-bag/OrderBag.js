import "./OrderBag.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDate } from "../../helper/getDate";
import { getNumberOfPrice, VND } from "../../helper/calcPrices";

const OrderBag = () => {
  const state = useSelector((state) => state);
  const productOrderList = state.productOrderRedux.productOrderList;
  const [isActive, setIsActive] = useState("");

  const handleActive = (value) => {
    setIsActive(value);
  };

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
    const currentPrice = price.reduce((a, b) => a + b);
    const subTotal = VND.format(currentPrice);
    const VAT = VND.format((currentPrice * 10) / 100);
    const totalPrice = VND.format(currentPrice + (currentPrice * 10) / 100);

    const id = productOrderList.map((item) => item.id);
    console.log("id", id);
    let sameId = [];
    sameId = id.filter((id) => id === 4);
    console.log("sameId", sameId.length);

    return (
      <div className="order-bag-wrap">
        <div className="order-bag">
          <div className="order-header">
            <h2>Shopping Cart</h2>
            <span>Order date: {getDate()}</span>
          </div>

          <div className="order-content">
            <div className="payment">
              <h4>Payment Details</h4>

              <span>
                Complete your purchase item by providing your payment details
                order.
              </span>

              <form action="">
                <div className="form-input email">
                  <label>Email Address</label>
                  <input type="mail" placeholder="Email" />
                </div>

                <div className="form-input card-detail">
                  <label>Card Detail</label>
                  <div className="card-detail">
                    <input type="text" placeholder="Card Number" />
                    <input type="text" placeholder="MM/YY" />
                    <input type="text" placeholder="CVC" />
                  </div>
                </div>

                <div className="form-input card-holder">
                  <label>Card Holder</label>
                  <input type="text" placeholder="Ex. James Bond" />
                </div>

                <div className="form-input address">
                  <label>Billing Address</label>
                  <input type="text" placeholder="Address" />
                  <div className="address">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Zip code" />
                  </div>
                </div>

                <div className="form-input payment-method">
                  <label>Payment method</label>
                  <div className="payment">
                    <div
                      className={
                        isActive === "visa"
                          ? "payment-select active"
                          : "payment-select"
                      }
                      onClick={() => handleActive("visa")}
                    >
                      <div className="card-number">
                        <span>**** 1234</span>
                        <span>
                          Visa - <Link className="link">Edit</Link>
                        </span>
                      </div>
                      <span>
                        <i className="fa-brands fa-cc-visa"></i>
                      </span>
                    </div>

                    <div
                      className={
                        isActive === "paypal"
                          ? "payment-select active"
                          : "payment-select"
                      }
                      onClick={() => handleActive("paypal")}
                    >
                      <div className="card-number">
                        <span>**** 1234</span>
                        <span>
                          Paypal - <Link className="link">Edit</Link>
                        </span>
                      </div>
                      <span>
                        <i className="fa-brands fa-paypal"></i>
                      </span>
                    </div>

                    <div className="payment-select">
                      <Link>
                        <span>
                          <i className="fa-regular fa-square-plus"></i>
                        </span>
                        <span>New</span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="form-input billing">
                  <input type="checkbox" />
                  <span>Billing address is same as shipping</span>
                </div>
              </form>
            </div>

            <div className="your-order">
              <h4>Your Order</h4>

              <div className="order-items">
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

              <div className="total-price">
                <div className="price-item sub-total">
                  <span>Subtotal</span>
                  <span>{subTotal}</span>
                </div>

                <div className="price-item vat">
                  <span>VAT (10%)</span>
                  <span>{VAT}</span>
                </div>

                <div className="price-item total">
                  <span>Total</span>
                  <span>{totalPrice}</span>
                </div>
              </div>

              <button>Pay {totalPrice}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default OrderBag;
