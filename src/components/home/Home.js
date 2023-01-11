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

const Home = ({ goTop }) => {
  return (
    <>
      <img
        src={require("../../assets/banner/Banner-Big-Desk-min-1920x450.png")}
        alt=""
      />
      <div className="homepage-content">
        <BannerSlider />
        <Option />
        <img src={require("../../assets/banner/Banner.png")} alt="" />
        <div className="product-container">
          <div>
            <img
              src={require("../../assets/product/background-product.png")}
              alt=""
            />
          </div>

          <ProductList />
        </div>
        <XHMS />
        <DMNB />
        <DVTI />
        <CTTH />
        {goTop && (
          <Button
            className="scroll-btn"
            outline
            title="Go on top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ion-icon name="arrow-up-outline"></ion-icon>
            </span>
          </Button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
