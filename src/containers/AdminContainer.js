import React, { useEffect, useState } from "react";
import "./AdminContainer.css";
import { Container } from "reactstrap";
import {
  getProductAPI,
  addProductAPI,
  deleteProductAPI,
  updateProductAPI,
} from "../api/ProductAPI";
import { getManufacturerAPI } from "../api/ManufacturerAPI";
import { getCategoryAPI } from "../api/CategoryAPI";
import { addAccountAPI, getAccountAPI } from "../api/AccountAPI";
import AdminTab from "../components/admin-tab/AdminTab";
import withAuth from "../components/hoc/withAuth";

const AdminContainer = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const [showProduct, setShowProduct] = useState(true);
  const [productList, setProductList] = useState([]);
  const [accountList, setAccountList] = useState([]);
  const [manufacturerList, setManufacturerList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  let [modalAddProduct, setModalAddProduct] = useState(false);
  let [modalEditProduct, setModalEditProduct] = useState(false);
  let [modalAddAccount, setModalAddAccount] = useState(false);
  let [modalEditAccount, setModalEditAccount] = useState(false);
  let [productUpdate, setProductUpdate] = useState({
    name: "",
    price: "",
    info: "",
    detail: "",
    ratingStar: "",
    imageName: "",
    manufacturerId: "",
    categoryId: "",
  });

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
    setModalAddAccount((modalAddAccount = true));
  };
  const onHandleHideModalAddAccount = () => {
    setModalAddAccount((modalAddAccount = false));
  };
  const onHandleShowModalEditAccount = () => {
    setModalEditAccount((modalEditAccount = true));
  };
  const onHandleHideModalEditAccount = () => {
    setModalEditAccount((modalEditAccount = false));
  };

  // Show & Hide Modal Products
  const onHandleShowModalAddProduct = () => {
    setModalAddProduct((modalAddProduct = true));
  };
  const onHandleHideModalAddProduct = () => {
    setModalAddProduct((modalAddProduct = false));
  };
  const onHandleShowModalEditProduct = (productItem) => {
    setProductUpdate((productUpdate = productItem));
    setModalEditProduct((modalEditProduct = true));
  };
  const onHandleHideModalEditProduct = () => {
    setModalEditProduct((modalEditProduct = false));
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
    addAccountAPI(accountNewAPI).then((res) => {
      fetchAccountList();
    });
    onHandleHideModalAddAccount();
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
    addProductAPI(productNewAPI).then((res) => {
      fetchProductList();
    });
    onHandleHideModalAddProduct();
  };
  const onHandleDeleteProduct = (productDelete) => {
    deleteProductAPI(productDelete.id).then((res) => {
      fetchProductList();
    });
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
    updateProductAPI(productUpdateAPI).then((res) => {
      fetchProductList();
    });
  };

  // Call API Accounts
  const fetchAccountList = () => {
    getAccountAPI().then((res) => {
      setAccountList(res.data);
    });
  };

  // Call API Products
  const fetchProductList = () => {
    getProductAPI().then((res) => {
      setProductList(res.data.content);
    });
  };
  const fetchManufacturerList = () => {
    getManufacturerAPI().then((res) => {
      setManufacturerList(res.data);
    });
  };
  const fetchCategoryList = () => {
    getCategoryAPI().then((res) => {
      setCategoryList(res.data);
    });
  };

  useEffect(() => {
    // Call API Products
    fetchProductList();
    fetchManufacturerList();
    fetchCategoryList();

    // Call API Accounts
    fetchAccountList();
  }, []);

  return (
    <Container>
      <div className="admin-wrapper">
        <AdminTab
          showProduct={showProduct}
          showAdmin={showAdmin}
          onHandleShowProduct={onHandleShowProduct}
          onHandleShowAdmin={onHandleShowAdmin}
          productList={productList}
          accountList={accountList}
          modalAddAccount={modalAddAccount}
          modalEditAccount={modalEditAccount}
          modalAddProduct={modalAddProduct}
          modalEditProduct={modalEditProduct}
          manufacturerList={manufacturerList}
          categoryList={categoryList}
          productUpdate={productUpdate}
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
