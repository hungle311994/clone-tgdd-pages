import "./AdminProduct.css";
import React from "react";
import { Button, Table } from "reactstrap";
import FormProduct from "./FormProduct";
import ModalAddProduct from "../modal-add-product/ModalAddProduct";
import ModalEditProduct from "../modal-edit-product/ModalEditProduct";
import { useSelector } from "react-redux";

const AdminProduct = (props) => {
  const state = useSelector((state) => state);
  const showModalAddProduct = state.modalProductRedux.showModalAddProduct;
  const showModalUpdateProduct = state.modalProductRedux.showModalUpdateProduct;

  const {
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
        <h1>Products Management</h1>

        <Button color="primary" onClick={handleModalAdd}>
          Add New Product
        </Button>
      </div>

      {showModalAddProduct && (
        <ModalAddProduct
          onHandleHideModalAddProduct={onHandleHideModalAddProduct}
          onHandleAddProduct={onHandleAddProduct}
        />
      )}

      {showModalUpdateProduct && (
        <ModalEditProduct
          onHandleHideModalEditProduct={onHandleHideModalEditProduct}
          onHandleUpdateProduct={onHandleUpdateProduct}
        />
      )}

      <Table responsive striped className="product-table">
        <FormProduct
          onHandleShowModalEditProduct={onHandleShowModalEditProduct}
          onHandleDeleteProduct={onHandleDeleteProduct}
        />
      </Table>
    </div>
  );
};

export default AdminProduct;
