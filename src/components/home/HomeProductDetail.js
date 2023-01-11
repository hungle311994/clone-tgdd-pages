import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "reactstrap";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchProductListAPI } from "../../redux/actions/product-actions/productAction";
import { actionAddOrder } from "../../redux/actions/product-actions/productOrderAction";

const HomeProductDetail = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const productList = state.productRedux.productList;
  const param = useParams();
  const paramId = Number(param.id);

  const handleAddOrder = (productOrder) => {
    const productOrdered = {
      id: productOrder.id,
      name: productOrder.name,
      price: productOrder.price,
      detail: productOrder.detail,
      info: productOrder.info,
      ratingStar: productOrder.ratingStar,
      imageName: productOrder.imageName,
      manufacturerName: productOrder.manufacturerName,
      categoryName: productOrder.categoryName,
      qty: 1,
    };
    dispatch(actionAddOrder(productOrdered));
  };

  useEffect(() => {
    dispatch(actionFetchProductListAPI());
  }, [dispatch]);

  return (
    <>
      {productList.length > 0 &&
        productList.map((item) => {
          if (item.id === paramId) {
            return (
              <div key={item.id}>
                <div className="product-detail-wrapper">
                  <div className="product-detail-header">
                    <h2>{item.name}</h2>
                    <span className="rating-star">
                      {item.ratingStar}
                      <ion-icon name="star"></ion-icon>
                    </span>
                    <span>
                      (<span>{item.ratingStar * 48}</span>)
                    </span>
                  </div>

                  <div className="product-detail-content">
                    <div className="content-left">
                      <img
                        src={require(`../../assets/product/${item.imageName}`)}
                        alt=""
                      />

                      <div className="warranty">
                        <div className="warranty-detail">
                          <div className="icon">
                            <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                          </div>
                          <p>
                            1 đổi 1 trong <strong>30 ngày</strong> đối với sản
                            phẩm lỗi tại 3375 siêu thị toàn quốc
                            <Link> Xem chi tiết</Link>
                          </p>
                        </div>

                        <div className="warranty-detail">
                          <div className="icon">
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                          </div>
                          <p>
                            Bảo hành
                            <strong> chính hãng điện thoại 18 tháng</strong> tại
                            các trung tâm bảo hành hãng
                            <Link> Xem địa chỉ bảo hành</Link>
                          </p>
                        </div>

                        <div className="warranty-detail">
                          <div className="icon">
                            <ion-icon name="cube-outline"></ion-icon>
                          </div>
                          <p>
                            Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim,
                            Ốp lưng, Cáp Type C, Củ sạc nhanh rời đầu Type A
                            <Link> Xem hình</Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="content-right">
                      <div className="buy-now">
                        <div className="buy-now-header">
                          <span>Giá Sốc Online</span>
                          <span>{item.price}</span>
                        </div>

                        <div className="buy-now-content">
                          <ul>
                            <li>Không áp dụng chung với khuyến mãi khác.</li>
                            <li>
                              Khuyến mãi chưa bao gồm phí giao/chuyển hàng.
                            </li>
                          </ul>
                          <Button
                            color="danger"
                            onClick={() => handleAddOrder(item)}
                          >
                            THÊM VÀO GIỎ HÀNG
                          </Button>
                          <Button color="primary">
                            <span>TRẢ GÓP QUA THẺ</span>
                            <span>Visa, Mastercard, JCB, Amex</span>
                          </Button>
                        </div>
                      </div>

                      <div className="product-table-detail">
                        <h3>Chi tiết {item.name}</h3>
                        <table>
                          <tbody>
                            <tr>
                              <td>Price:</td>
                              <td>{item.price}</td>
                            </tr>
                            <tr>
                              <td>Info:</td>
                              <td>{item.info}</td>
                            </tr>
                            <tr>
                              <td>Detail:</td>
                              <td>{item.detail}</td>
                            </tr>
                            <tr>
                              <td>Star:</td>
                              <td>{item.ratingStar}</td>
                            </tr>
                            <tr>
                              <td>Manufacturer:</td>
                              <td>{item.manufacturerName}</td>
                            </tr>
                            <tr>
                              <td>Category:</td>
                              <td>{item.categoryName}</td>
                            </tr>
                          </tbody>
                        </table>
                        <Button color="primary" outline>
                          <span>Xem thêm chi tiết sản phẩm</span>
                          <ion-icon name="caret-forward-outline"></ion-icon>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            );
          }
          return true;
        })}
    </>
  );
};

export default HomeProductDetail;
