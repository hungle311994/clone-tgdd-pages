import React from "react";
import "./ModalAddProduct.css";
import { Button, ModalFooter, ModalHeader } from "reactstrap";
import ModalAddProductForm from "./ModalAddProductForm";
import { useSelector } from "react-redux";

const ModalAddProduct = (props) => {
  const state = useSelector((state) => state);
  const manufacturerList = state.manufacturerRedux.manufacturerList;
  const categoryList = state.categoryRedux.categoryList;

  const { onHandleHideModalAddProduct, onHandleAddProduct } = props;

  const handleHideModalAdd = () => {
    onHandleHideModalAddProduct();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <ModalHeader>Create New Product</ModalHeader>

        <ModalAddProductForm
          manufacturerList={manufacturerList}
          categoryList={categoryList}
          onHandleAddProduct={onHandleAddProduct}
        ></ModalAddProductForm>

        <ModalFooter>
          <Button
            type="button"
            color="danger"
            data-dismiss="modal"
            onClick={handleHideModalAdd}
          >
            Close
          </Button>
        </ModalFooter>
      </div>
    </div>
  );
};

export default ModalAddProduct;
