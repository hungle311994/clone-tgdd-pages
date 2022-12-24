import React from "react";
import { Button, ModalFooter, ModalHeader } from "reactstrap";
import ModalEditAccountForm from "./ModalEditAccountForm";

const ModalEditAccount = ({ onHandleHideModalEditAccount }) => {
  const handleHideModalEdit = () => {
    onHandleHideModalEditAccount();
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-content">
        <ModalHeader>Update Account</ModalHeader>

        <ModalEditAccountForm />

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

export default ModalEditAccount;
