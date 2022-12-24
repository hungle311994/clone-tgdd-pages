import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ productList }) => {
  return (
    <div className="product-list-wrapper">
      <div className="product-list">
        {productList.map((productItem, idx) => {
          return (
            <Link
              className="product-item"
              to={`/HomeProductDetail/${productItem.id}`}
              key={productItem.id}
            >
              <div className="product-item-img">
                <img
                  src={require(`../../assets/product/${productItem.imageName}`)}
                  alt=""
                />
              </div>
              <div className="product-item-detail">
                <h4>{productItem.name}</h4>
                <span className="manufacturer">
                  Hãng sản xuất:
                  <span> {productItem.manufacturerName}</span>
                </span>
                <span className="rating-star">
                  {productItem.ratingStar}
                  <ion-icon name="star"></ion-icon>
                </span>
                <span>
                  (<span>{productItem.ratingStar * 48}</span>)
                </span>
                <span className="price">{productItem.price}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
