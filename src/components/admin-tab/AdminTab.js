import "./AdminTab.css";
import React from "react";
import AdminProduct from "../admin-product/AdminProduct";
import AdminAccount from "../admin-account/AdminAccount";
import { Link } from "react-router-dom";
import { useState } from "react";

const AdminTab = (props) => {
  const {
    showProduct,
    showAdmin,
    onHandleShowProduct,
    onHandleShowAdmin,
    onHandleShowModalAddAccount,
    onHandleHideModalAddAccount,
    onHandleShowModalEditAccount,
    onHandleHideModalEditAccount,
    onHandleShowModalAddProduct,
    onHandleHideModalAddProduct,
    onHandleShowModalEditProduct,
    onHandleAddAccount,
    onHandleAddProduct,
    onHandleDeleteProduct,
    onHandleHideModalEditProduct,
    onHandleUpdateProduct,
  } = props;
  const [addClassAdmin, setAddClassAdmin] = useState("admin-tab-item");
  const [addClassProduct, setAddClassProduct] = useState(
    "admin-tab-item active"
  );

  const handleShowAdmin = () => {
    onHandleShowAdmin();
    setAddClassAdmin("admin-tab-item active");
    setAddClassProduct("admin-tab-item");
  };
  const handleShowProduct = () => {
    onHandleShowProduct();
    setAddClassProduct("admin-tab-item active");
    setAddClassAdmin("admin-tab-item");
  };

  return (
    <>
      <div className="admin-tab">
        <ul>
          <Link className={addClassAdmin} onClick={handleShowAdmin}>
            <li>Accounts</li>
          </Link>
          <Link className={addClassProduct} onClick={handleShowProduct}>
            <li>Products</li>
          </Link>
        </ul>
      </div>

      {showAdmin && (
        <AdminAccount
          onHandleShowModalAddAccount={onHandleShowModalAddAccount}
          onHandleHideModalAddAccount={onHandleHideModalAddAccount}
          onHandleShowModalEditAccount={onHandleShowModalEditAccount}
          onHandleHideModalEditAccount={onHandleHideModalEditAccount}
          onHandleAddAccount={onHandleAddAccount}
        />
      )}

      {showProduct && (
        <AdminProduct
          onHandleShowModalAddProduct={onHandleShowModalAddProduct}
          onHandleHideModalAddProduct={onHandleHideModalAddProduct}
          onHandleShowModalEditProduct={onHandleShowModalEditProduct}
          onHandleAddProduct={onHandleAddProduct}
          onHandleDeleteProduct={onHandleDeleteProduct}
          onHandleHideModalEditProduct={onHandleHideModalEditProduct}
          onHandleUpdateProduct={onHandleUpdateProduct}
        />
      )}
    </>
  );
};

export default AdminTab;
