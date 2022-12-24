import "./AdminProduct.css";
import React from "react";
import { Button, Table } from "reactstrap";
import FormProduct from "./FormProduct";
import ModalAddProduct from "../modal-add-product/ModalAddProduct";
import ModalEditProduct from "../modal-edit-product/ModalEditProduct";

const AdminProduct = (props) => {
  const {
    productList,
    productUpdate,
    manufacturerList,
    categoryList,
    modalAddProduct,
    modalEditProduct,
    onHandleShowModalAddProduct,
    onHandleShowModalEditProduct,
    onHandleHideModalAddProduct,
    onHandleAddProduct,
    onHandleDeleteProduct,
    onHandleHideModalEditProduct,
    onHandleUpdateProduct,
  } = props;

  const handleModalAdd = () => {
    onHandleShowModalAddProduct();
  };

  return (
    <div className="admin-product">
      <div className="product-header">
        <h1 className="product-header-tilte">Products Management</h1>

        <Button
          className="product-header-addnew"
          color="primary"
          onClick={handleModalAdd}
        >
          Add New Product
        </Button>
      </div>

      {modalAddProduct && (
        <ModalAddProduct
          manufacturerList={manufacturerList}
          categoryList={categoryList}
          onHandleHideModalAddProduct={onHandleHideModalAddProduct}
          onHandleAddProduct={onHandleAddProduct}
        />
      )}

      {modalEditProduct && (
        <ModalEditProduct
          productUpdate={productUpdate}
          manufacturerList={manufacturerList}
          categoryList={categoryList}
          onHandleHideModalEditProduct={onHandleHideModalEditProduct}
          onHandleUpdateProduct={onHandleUpdateProduct}
        />
      )}

      <Table responsive striped className="product-table">
        <FormProduct
          productList={productList}
          manufacturerList={manufacturerList}
          categoryList={categoryList}
          onHandleShowModalEditProduct={onHandleShowModalEditProduct}
          onHandleDeleteProduct={onHandleDeleteProduct}
        />
      </Table>
    </div>
  );
};

export default AdminProduct;
