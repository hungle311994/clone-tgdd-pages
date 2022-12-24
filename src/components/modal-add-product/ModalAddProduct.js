import React from "react";
import "./ModalAddProduct.css";
import { Button, ModalFooter, ModalHeader } from "reactstrap";
import ModalAddProductForm from "./ModalAddProductForm";

const ModalAddProduct = (props) => {
  const {
    manufacturerList,
    categoryList,
    onHandleHideModalAddProduct,
    onHandleAddProduct,
  } = props;

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
