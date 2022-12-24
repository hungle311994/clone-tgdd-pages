import "./AdminAccount.css";
import React from "react";
import { Button, Table } from "reactstrap";
import ModalAddAccount from "../modal-add-account/ModalAddAccount";
import ModalEditAccount from "../modal-edit-account/ModalEditAccount";
import FormAccount from "./FormAccount";

const AdminAccount = (props) => {
  const {
    accountList,
    modalAddAccount,
    modalEditAccount,
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
        <h1 className="account-header-tilte">Accounts Management</h1>

        <Button
          className="account-header-addnew"
          color="primary"
          onClick={handleAddAccount}
        >
          Add New Account
        </Button>
      </div>

      {modalAddAccount && (
        <ModalAddAccount
          onHandleHideModalAddAccount={onHandleHideModalAddAccount}
          onHandleAddAccount={onHandleAddAccount}
        />
      )}

      {modalEditAccount && (
        <ModalEditAccount
          onHandleHideModalEditAccount={onHandleHideModalEditAccount}
        />
      )}

      <Table responsive striped className="account-table">
        <FormAccount
          accountList={accountList}
          onHandleShowModalEditAccount={onHandleShowModalEditAccount}
        />
      </Table>
    </div>
  );
};

export default AdminAccount;
