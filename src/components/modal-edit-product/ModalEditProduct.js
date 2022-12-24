import React from "react";
import { ModalHeader, ModalFooter, Button } from "reactstrap";
import ModalEditProductForm from "./ModalEditProductForm";

const ModalEditProduct = (props) => {
  const {
    productUpdate,
    manufacturerList,
    categoryList,
    onHandleHideModalEditProduct,
    onHandleUpdateProduct,
  } = props;

  const handleHideModalEdit = () => {
    onHandleHideModalEditProduct();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <ModalHeader className="modal-title">Update Product</ModalHeader>

        <ModalEditProductForm
          productUpdate={productUpdate}
          manufacturerList={manufacturerList}
          categoryList={categoryList}
          onHandleUpdateProduct={onHandleUpdateProduct}
        />

        <ModalFooter>
          <Button
            type="button"
            color="danger"
            data-dismiss="modal"
            onClick={handleHideModalEdit}
          >
            Close
          </Button>
        </ModalFooter>
      </div>
    </div>
  );
};

export default ModalEditProduct;
