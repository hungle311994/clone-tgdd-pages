import React, { useState, useEffect } from "react";
import "./HomeContainer.css";
import { getProductAPI } from "../api/ProductAPI";
import withLoading from "../components/hoc/withLoading";
import Home from "../components/home/Home";

const HomeContainer = () => {
  const [productList, setProductList] = useState([]);
  const [goTop, setGoTop] = useState(false);

  const fetchProductList = () => {
    getProductAPI().then((res) => {
      setProductList(res.data.content);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProductList();
    }, 1000);

    window.addEventListener("scroll", () => setGoTop(window.scrollY >= 200));
  }, []);

  const HomeWithLoading = withLoading(Home);

  return (
    <div className="homepage">
      <HomeWithLoading productList={productList} goTop={goTop} />
    </div>
  );
};

export default HomeContainer;
