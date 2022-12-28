import React from "react";
import FormAccountItem from "./FormAccountItem";

const FormAccount = (props) => {
  const { onHandleShowModalEditAccount } = props;

  return (
    <>
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Username</th>
          <th>Fullname</th>
          <th>Avatar</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>CreateDate</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <FormAccountItem
        onHandleShowModalEditAccount={onHandleShowModalEditAccount}
      />
    </>
  );
};

export default FormAccount;
