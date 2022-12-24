import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import AdminContainer from "../containers/AdminContainer";
import About from "../components/about/About";
import Error from "../components/error/Error";
import Signup from "../components/sign-up/Signup";
import Login from "../components/login/Login";
import ModalAddProduct from "../components/modal-add-product/ModalAddProduct";
import OrderBag from "../components/order-bag/OrderBag";
import OrderHistory from "../components/order-history/OrderHistory";
import HomeProductDetail from "../components/home/HomeProductDetail";

export const routes = (
  <Routes>
    <Route path="/" element={<HomeContainer />} />
    <Route path="/HomeContainer" element={<HomeContainer />} />
    <Route path="/AdminContainer" element={<AdminContainer />} />
    <Route path="/OrderHistory" element={<OrderHistory />} />
    <Route path="/OrderBag" element={<OrderBag />} />
    <Route path="/About" element={<About />} />
    <Route path="/Signup" element={<Signup />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/HomeProductDetail/:id" element={<HomeProductDetail />} />
    <Route path="*" element={<Error />} />
    <Route path="/ModalAddProduct" element={<ModalAddProduct />}></Route>
  </Routes>
);
