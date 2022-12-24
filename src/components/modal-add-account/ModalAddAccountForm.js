import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup, Input, Label, ModalBody } from "reactstrap";

const ModalInputAccount = ({ onHandleAddAccount }) => {
  const [emailAccount, setEmailAccount] = useState("");
  const [usernameAccount, setUsernameAccount] = useState("");
  const [fullnameAccount, setFullnameAccount] = useState("");
  const [avatarAccount, setAvatarAccount] = useState("");
  const [mobileAccount, setMobileAccount] = useState("");
  const [addressAccount, setAddressAccount] = useState("");

  const handleAdd = () => {
    const accountNew = {
      email: emailAccount,
      username: usernameAccount,
      fullname: fullnameAccount,
      avatar: getImageName(avatarAccount),
      mobile: mobileAccount,
      address: addressAccount,
    };
    onHandleAddAccount(accountNew);
  };

  const getImageName = (pathImage) => {
    const array = pathImage.split("\\");
    const imageName = array[array.length - 1];
    return imageName;
  };

  const handleReset = () => {
    setEmailAccount("");
    setUsernameAccount("");
    setFullnameAccount("");
    setAvatarAccount("");
    setMobileAccount("");
    setAddressAccount("");
  };
  return (
    <ModalBody>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="mail"
            className="form-control"
            placeholder="Enter Email"
            value={emailAccount}
            onChange={(e) => setEmailAccount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Username</Label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={usernameAccount}
            onChange={(e) => setUsernameAccount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Fullname</Label>
          <Input
            type="area"
            className="form-control"
            placeholder="Enter Fullname"
            value={fullnameAccount}
            onChange={(e) => setFullnameAccount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Avatar</Label>
          <Input
            type="file"
            className="form-control"
            value={avatarAccount}
            onChange={(e) => setAvatarAccount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Mobile</Label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter Mobile"
            value={mobileAccount}
            onChange={(e) => setMobileAccount(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Address</Label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            value={addressAccount}
            onChange={(e) => setAddressAccount(e.target.value)}
          />
        </FormGroup>

        <Button type="button" color="primary" outline onClick={handleAdd}>
          Save
        </Button>
        <Button
          type="reset"
          className="reset-btn"
          color="danger"
          outline
          onClick={handleReset}
        >
          Reset
        </Button>
      </Form>
    </ModalBody>
  );
};

export default ModalInputAccount;
