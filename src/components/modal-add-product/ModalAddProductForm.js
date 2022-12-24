import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, ModalBody } from "reactstrap";

function ModalAddProductForm(props) {
  let { manufacturerList, categoryList, onHandleAddProduct } = props;
  // let [idProduct, setIdProduct] = useState("");
  let [nameProduct, setNameProduct] = useState("");
  let [priceProduct, setPriceProduct] = useState("");
  let [infoProduct, setInfoProduct] = useState("");
  let [detailProduct, setDetailProduct] = useState("");
  let [starProduct, setStarProduct] = useState("");
  let [imageProduct, setImageProduct] = useState("");
  let [manufacturerProduct, setManufacturerProduct] = useState("");
  let [categoryProduct, setCategoryProduct] = useState("");

  let handleAddProduct = () => {
    let productNew = {
      name: nameProduct,
      price: priceProduct,
      info: infoProduct,
      detail: detailProduct,
      ratingStar: starProduct,
      imageName: getImageName(imageProduct),
      manufacturerId: manufacturerProduct,
      categoryId: categoryProduct,
    };
    onHandleAddProduct(productNew);
  };
  let getImageName = (pathImage) => {
    let array = pathImage.split("\\");
    let imageName = array[array.length - 1];
    return imageName;
  };
  let handleReset = () => {
    setNameProduct("");
    setPriceProduct("");
    setInfoProduct("");
    setDetailProduct("");
    setStarProduct("");
    setImageProduct("");
    setManufacturerProduct("");
    setCategoryProduct("");
  };

  return (
    <ModalBody>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={nameProduct}
            onChange={(e) => {
              setNameProduct(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Price</Label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter Price"
            value={priceProduct}
            onChange={(e) => {
              setPriceProduct(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Info</Label>
          <Input
            type="textarea"
            className="form-control"
            value={infoProduct}
            onChange={(e) => {
              setInfoProduct(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Detail</Label>
          <Input
            type="textarea"
            className="form-control"
            value={detailProduct}
            onChange={(e) => {
              setDetailProduct(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Star</Label>
          <Input
            type="text"
            className="form-control"
            placeholder="Enter Star"
            value={starProduct}
            onChange={(e) => {
              setStarProduct(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Image</Label>
          <Input
            type="file"
            className="form-control"
            value={imageProduct}
            onChange={(e) => {
              setImageProduct(e.target.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Manufacturer</Label>
          <Input
            type="select"
            value={manufacturerProduct}
            onChange={(e) => {
              setManufacturerProduct(e.target.value);
            }}
          >
            <option>--Choose Manufacturer</option>
            {manufacturerList.map((manufacturerItem) => (
              <option key={manufacturerItem.id} value={manufacturerItem.id}>
                {manufacturerItem.name}
              </option>
            ))}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Category</Label>
          <Input
            type="select"
            value={categoryProduct}
            onChange={(e) => {
              setCategoryProduct(e.target.value);
            }}
          >
            <option>--Choose Category</option>
            {categoryList.map((categoryItem) => (
              <option key={categoryItem.id} value={categoryItem.id}>
                {categoryItem.name}
              </option>
            ))}
          </Input>
        </FormGroup>

        <Button
          type="button"
          color="primary"
          outline
          onClick={handleAddProduct}
        >
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
}

export default ModalAddProductForm;
