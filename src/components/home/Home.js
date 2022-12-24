import "./Home.css";
import React from "react";
import { Button } from "reactstrap";
import BannerSlider from "../banner-slider/BannerSlider";
import CTTH from "../ctth/CTTH";
import DMNB from "../dmnb/DMNB";
import DVTI from "../dvti/DVTI";
import Option from "../option/Option";
import XHMS from "../xhms/XHMS";
import ProductList from "./ProductList";
import Footer from "../footer/Footer";

const Home = ({ productList, goTop }) => {
  return (
    <>
      <img src={require("../../assets/banner/Banner-big-TGDD.png")} alt="" />
      <div className="homepage-content">
        <BannerSlider />
        <Option />
        <img src={require("../../assets/banner/Banner.png")} alt="" />
        <div className="product-container">
          <div className="banner-halloween">
            <img
              src={require("../../assets/product/background-product.png")}
              alt=""
            />
          </div>

          <ProductList productList={productList} />
        </div>
        <XHMS />
        <DMNB />
        <DVTI />
        <CTTH />
        {goTop && (
          <Button
            className="scroll-btn"
            outline
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ion-icon name="arrow-up-outline"></ion-icon>
          </Button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
