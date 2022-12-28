import "./AdminAccount.css";
import React from "react";
import { Button, Table } from "reactstrap";
import ModalAddAccount from "../modal-add-account/ModalAddAccount";
import ModalEditAccount from "../modal-edit-account/ModalEditAccount";
import FormAccount from "./FormAccount";
import { useSelector } from "react-redux";

const AdminAccount = (props) => {
  const state = useSelector((state) => state);
  const showModalAddAccount = state.modalAccountRedux.showModalAddAccount;
  const showModalUpdateAccount = state.modalAccountRedux.showModalUpdateAccount;

  const {
    onHandleShowModalAddAccount,
    onHandleHideModalAddAccount,
    onHandleShowModalEditAccount,
    onHandleHideModalEditAccount,
    onHandleAddAccount,
  } = props;

  const handleAddAccount = () => {
    onHandleShowModalAddAccount();
  };

  return (
    <div className="admin-account">
      <div className="account-header">
        <h1>Accounts Management</h1>

        <Button
          className="account-header-addnew"
          color="primary"
          onClick={handleAddAccount}
        >
          Add New Account
        </Button>
      </div>

      {showModalAddAccount && (
        <ModalAddAccount
          onHandleHideModalAddAccount={onHandleHideModalAddAccount}
          onHandleAddAccount={onHandleAddAccount}
        />
      )}

      {showModalUpdateAccount && (
        <ModalEditAccount
          onHandleHideModalEditAccount={onHandleHideModalEditAccount}
        />
      )}

      <Table responsive striped className="account-table">
        <FormAccount
          onHandleShowModalEditAccount={onHandleShowModalEditAccount}
        />
      </Table>
    </div>
  );
};

export default AdminAccount;
