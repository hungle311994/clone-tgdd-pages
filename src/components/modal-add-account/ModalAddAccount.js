import React from "react";
import "../modal-add-product/ModalAddProduct.css";
import { Button, ModalFooter, ModalHeader } from "reactstrap";
import ModalAddAccountForm from "./ModalAddAccountForm";

const ModalAddAccount = ({
  onHandleHideModalAddAccount,
  onHandleAddAccount,
}) => {
  const handleHideModalAccount = () => {
    onHandleHideModalAddAccount();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <ModalHeader>Create New Account</ModalHeader>

        <ModalAddAccountForm onHandleAddAccount={onHandleAddAccount} />

        <ModalFooter>
          <Button
            type="button"
            color="danger"
            data-dismiss="modal"
            onClick={handleHideModalAccount}
          >
            Close
          </Button>
        </ModalFooter>
      </div>
    </div>
  );
};

export default ModalAddAccount;
