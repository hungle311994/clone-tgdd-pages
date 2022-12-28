import React, { useEffect, useState } from "react";
import "./AdminContainer.css";
import { Container } from "reactstrap";
import AdminTab from "../components/admin-tab/AdminTab";
import withAuth from "../components/hoc/withAuth";
import { useDispatch } from "react-redux";
import {
  actionHideModalAddProduct,
  actionHideModalUpdateProduct,
  actionShowModalAddProduct,
  actionShowModalUpdateProduct,
} from "../redux/actions/product-actions/modalProductAction";
import {
  actionHideModalAddAccount,
  actionHideModalUpdateAccount,
  actionShowModalAddAccount,
  actionShowModalUpdateAccount,
} from "../redux/actions/account-actions/modalAccountAction";
import { actionFetchProductListAPI } from "../redux/actions/product-actions/productAction";
import { actionFetchManufacturerListAPI } from "../redux/actions/product-actions/manufacturerAction";
import { actionFetchCategoryListAPI } from "../redux/actions/product-actions/categoryAction";
import { actionAddProductAPI } from "../redux/actions/product-actions/addAction";
import { actionFetchAccountListAPI } from "../redux/actions/account-actions/accountAction";
import { actionDeleteProductAPI } from "../redux/actions/product-actions/deleteAction";
import { actionShowUpdateProduct } from "../redux/actions/product-actions/showProductUpdateAction";
import { actionUpdateProductAPI } from "../redux/actions/product-actions/updateAction";

const AdminContainer = () => {
  const dispatch = useDispatch();

  const [showAdmin, setShowAdmin] = useState(false);
  const [showProduct, setShowProduct] = useState(true);

  // Show Admins Tab & Products Tab
  const onHandleShowProduct = () => {
    setShowProduct(true);
    setShowAdmin(false);
  };
  const onHandleShowAdmin = () => {
    setShowProduct(false);
    setShowAdmin(true);
  };

  // Show & Hide Modal Accounts
  const onHandleShowModalAddAccount = () => {
    dispatch(actionShowModalAddAccount());
  };
  const onHandleHideModalAddAccount = () => {
    dispatch(actionHideModalAddAccount());
  };
  const onHandleShowModalEditAccount = () => {
    dispatch(actionShowModalUpdateAccount());
  };
  const onHandleHideModalEditAccount = () => {
    dispatch(actionHideModalUpdateAccount());
  };

  // Show & Hide Modal Products
  const onHandleShowModalAddProduct = () => {
    dispatch(actionShowModalAddProduct());
  };
  const onHandleHideModalAddProduct = () => {
    dispatch(actionHideModalAddProduct());
  };
  const onHandleShowModalEditProduct = (productItem) => {
    dispatch(actionShowUpdateProduct(productItem));
    dispatch(actionShowModalUpdateProduct());
  };
  const onHandleHideModalEditProduct = () => {
    dispatch(actionHideModalUpdateProduct());
  };

  // Add, Del, Update Account
  const onHandleAddAccount = (accountNew) => {
    const accountNewAPI = {
      email: accountNew.email,
      username: accountNew.username,
      fullname: accountNew.fullname,
      avatarImageName: accountNew.avatar,
      mobile: accountNew.mobile,
      address: accountNew.address,
    };
    console.log("accountNewAPI", accountNewAPI);
    // addAccountAPI(accountNewAPI).then((res) => {
    //   fetchAccountList();
    // });
    dispatch(actionHideModalAddAccount());
  };

  // Add, Del, Update Product
  const onHandleAddProduct = (productNew) => {
    const productNewAPI = {
      name: productNew.name,
      price: productNew.price,
      info: productNew.info,
      detail: productNew.detail,
      ratingStar: productNew.ratingStar,
      imageName: productNew.imageName,
      manufacturerId: productNew.manufacturerId,
      categoryId: productNew.categoryId,
    };
    console.log("productNewAPI", productNewAPI);

    dispatch(actionAddProductAPI(productNewAPI));
    dispatch(actionHideModalAddProduct());
  };

  const onHandleDeleteProduct = (productDelete) => {
    dispatch(actionDeleteProductAPI(productDelete));
  };

  const onHandleUpdateProduct = (productUpdated) => {
    const productUpdateAPI = {
      id: productUpdated.id,
      name: productUpdated.name,
      price: productUpdated.price,
      info: productUpdated.info,
      detail: productUpdated.detail,
      ratingStar: productUpdated.ratingStar,
      imageName: productUpdated.imageName,
      manufacturerId: productUpdated.manufacturerId,
      categoryId: productUpdated.categoryId,
    };
    console.log("productUpdateAPI", productUpdateAPI);
    dispatch(actionUpdateProductAPI(productUpdateAPI));
    dispatch(actionHideModalUpdateProduct());
  };

  useEffect(() => {
    // Call API Products
    dispatch(actionFetchProductListAPI());
    dispatch(actionFetchManufacturerListAPI());
    dispatch(actionFetchCategoryListAPI());

    // Call API Accounts
    dispatch(actionFetchAccountListAPI());
  }, [dispatch]);

  return (
    <Container>
      <div className="admin-wrapper">
        <AdminTab
          showProduct={showProduct}
          showAdmin={showAdmin}
          onHandleShowProduct={onHandleShowProduct}
          onHandleShowAdmin={onHandleShowAdmin}
          onHandleShowModalAddAccount={onHandleShowModalAddAccount}
          onHandleHideModalAddAccount={onHandleHideModalAddAccount}
          onHandleShowModalEditAccount={onHandleShowModalEditAccount}
          onHandleHideModalEditAccount={onHandleHideModalEditAccount}
          onHandleShowModalAddProduct={onHandleShowModalAddProduct}
          onHandleHideModalAddProduct={onHandleHideModalAddProduct}
          onHandleShowModalEditProduct={onHandleShowModalEditProduct}
          onHandleHideModalEditProduct={onHandleHideModalEditProduct}
          onHandleAddAccount={onHandleAddAccount}
          onHandleAddProduct={onHandleAddProduct}
          onHandleDeleteProduct={onHandleDeleteProduct}
          onHandleUpdateProduct={onHandleUpdateProduct}
        />
      </div>
    </Container>
  );
};

export default withAuth(AdminContainer);
