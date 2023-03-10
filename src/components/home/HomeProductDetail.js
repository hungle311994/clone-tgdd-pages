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
                            1 ?????i 1 trong <strong>30 ng??y</strong> ?????i v???i s???n
                            ph???m l???i t???i 3375 si??u th??? to??n qu???c
                            <Link> Xem chi ti???t</Link>
                          </p>
                        </div>

                        <div className="warranty-detail">
                          <div className="icon">
                            <ion-icon name="shield-checkmark-outline"></ion-icon>
                          </div>
                          <p>
                            B???o h??nh
                            <strong> ch??nh h??ng ??i???n tho???i 18 th??ng</strong> t???i
                            c??c trung t??m b???o h??nh h??ng
                            <Link> Xem ?????a ch??? b???o h??nh</Link>
                          </p>
                        </div>

                        <div className="warranty-detail">
                          <div className="icon">
                            <ion-icon name="cube-outline"></ion-icon>
                          </div>
                          <p>
                            B??? s???n ph???m g???m: H???p, S??ch h?????ng d???n, C??y l???y sim,
                            ???p l??ng, C??p Type C, C??? s???c nhanh r???i ?????u Type A
                            <Link> Xem h??nh</Link>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="content-right">
                      <div className="buy-now">
                        <div className="buy-now-header">
                          <span>Gi?? S???c Online</span>
                          <span>{item.price}</span>
                        </div>

                        <div className="buy-now-content">
                          <ul>
                            <li>Kh??ng ??p d???ng chung v???i khuy???n m??i kh??c.</li>
                            <li>
                              Khuy???n m??i ch??a bao g???m ph?? giao/chuy???n h??ng.
                            </li>
                          </ul>
                          <Button
                            color="danger"
                            onClick={() => handleAddOrder(item)}
                          >
                            TH??M V??O GI??? H??NG
                          </Button>
                          <Button color="primary">
                            <span>TR??? G??P QUA TH???</span>
                            <span>Visa, Mastercard, JCB, Amex</span>
                          </Button>
                        </div>
                      </div>

                      <div className="product-table-detail">
                        <h3>Chi ti???t {item.name}</h3>
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
                          <span>Xem th??m chi ti???t s???n ph???m</span>
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
