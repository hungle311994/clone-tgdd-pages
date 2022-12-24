import React, { useState } from "react";
import { ModalBody, Form, FormGroup, Label, Input, Button } from "reactstrap";

const ModalEditProductForm = (props) => {
  const {
    productUpdate,
    manufacturerList,
    categoryList,
    onHandleUpdateProduct,
  } = props;
  const [nameUpdate, setNameUpdate] = useState(productUpdate.name);
  const [priceUpdate, setPriceUpdate] = useState(productUpdate.price);
  const [infoUpdate, setInfoUpdate] = useState(productUpdate.info);
  const [detailUpdate, setDetailUpdate] = useState(productUpdate.detail);
  const [ratingStarUpdate, setRatingStarUpdate] = useState(
    productUpdate.ratingStar
  );
  const [imageUpdate, setImageUpdate] = useState("");
  const [manufacturerUpdate, setManufacturerUpdate] = useState(
    productUpdate.manufacturerName
  );
  const [categoryUpdate, setCategoryUpdate] = useState(
    productUpdate.categoryName
  );

  const getImageName = (pathImage) => {
    const array = pathImage.split("\\");
    const imageName = array[array.length - 1];
    return imageName;
  };

  const handleUpdate = () => {
    const productUpdated = {
      id: productUpdate.id,
      name: nameUpdate,
      price: priceUpdate,
      info: infoUpdate,
      detail: detailUpdate,
      ratingStar: ratingStarUpdate,
      imageName: getImageName(imageUpdate),
      manufacturerId: manufacturerUpdate,
      categoryId: categoryUpdate,
    };
    onHandleUpdateProduct(productUpdated);
  };

  const handleReset = () => {
    setNameUpdate(productUpdate.name);
    setPriceUpdate(productUpdate.price);
    setInfoUpdate(productUpdate.info);
    setDetailUpdate(productUpdate.detail);
    setRatingStarUpdate(productUpdate.ratingStar);
    setManufacturerUpdate(productUpdate.manufacturerName);
    setCategoryUpdate(productUpdate.categoryName);
  };

  return (
    <ModalBody className="modal-body">
      <Form>
        <FormGroup>
          <Label className="modal-body-title">ID</Label>
          <Input
            type="text"
            className="form-control"
            disabled
            value={productUpdate.id}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Name</Label>
          <Input
            type="text"
            className="form-control"
            value={nameUpdate}
            onChange={(e) => setNameUpdate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Price</Label>
          <Input
            type="text"
            className="form-control"
            value={priceUpdate}
            onChange={(e) => setPriceUpdate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Info</Label>
          <Input
            type="textarea"
            className="form-control"
            value={infoUpdate}
            onChange={(e) => setInfoUpdate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Detail</Label>
          <Input
            type="textarea"
            className="form-control"
            value={detailUpdate}
            onChange={(e) => setDetailUpdate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Star</Label>
          <Input
            type="text"
            className="form-control"
            value={ratingStarUpdate}
            onChange={(e) => setRatingStarUpdate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Image</Label>
          <Input
            type="file"
            className="form-control"
            value={imageUpdate}
            onChange={(e) => setImageUpdate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label className="modal-body-title">Manufacturer</Label>
          <Input
            type="select"
            value={manufacturerUpdate}
            onChange={(e) => setManufacturerUpdate(e.target.value)}
          >
            <option>--{productUpdate.manufacturerName}</option>
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
            value={categoryUpdate}
            onChange={(e) => setCategoryUpdate(e.target.value)}
          >
            <option>--{productUpdate.categoryName}</option>
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
          style={{ width: "70px" }}
          outline
          onClick={handleUpdate}
        >
          Update
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

export default ModalEditProductForm;
