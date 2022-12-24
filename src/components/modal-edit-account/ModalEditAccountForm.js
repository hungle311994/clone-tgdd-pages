import React from "react";
import { Button, Form, FormGroup, Input, Label, ModalBody } from "reactstrap";

const ModalEditAccountForm = () => {
  return (
    <ModalBody>
      <Form>
        <FormGroup>
          <Label>Email</Label>
          <Input type="mail" className="form-control" />
        </FormGroup>

        <FormGroup>
          <Label>Username</Label>
          <Input type="text" className="form-control" />
        </FormGroup>

        <FormGroup>
          <Label>Fullname</Label>
          <Input type="text" className="form-control" />
        </FormGroup>

        <FormGroup>
          <Label>Avatar</Label>
          <Input type="file" className="form-control" />
        </FormGroup>

        <FormGroup>
          <Label>Mobile</Label>
          <Input type="text" className="form-control" />
        </FormGroup>

        <FormGroup>
          <Label>Address</Label>
          <Input type="text" className="form-control" />
        </FormGroup>

        <Button type="button" color="primary" outline>
          Save
        </Button>
        <Button type="reset" className="reset-btn" color="danger" outline>
          Reset
        </Button>
      </Form>
    </ModalBody>
  );
};

export default ModalEditAccountForm;
