import React, { useState, useEffect } from "react";
import "./HomeContainer.css";
import withLoading from "../components/hoc/withLoading";
import Home from "../components/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchProductListAPI } from "../redux/actions/product-actions/productAction";

const HomeContainer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const productList = state.productRedux.productList;
  const [goTop, setGoTop] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      dispatch(actionFetchProductListAPI());
    }, 500);

    window.addEventListener("scroll", () => setGoTop(window.scrollY >= 150));
  }, [dispatch]);

  const HomeWithLoading = withLoading(Home);

  return (
    <div className="homepage">
      <HomeWithLoading productList={productList} goTop={goTop} />
    </div>
  );
};

export default HomeContainer;
