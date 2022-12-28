import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Input } from "reactstrap";
import FormProductItem from "./FormProductItem";

const FormProduct = (props) => {
  const state = useSelector((state) => state);
  const manufacturerList = state.manufacturerRedux.manufacturerList;
  const categoryList = state.categoryRedux.categoryList;

  const { onHandleShowModalEditProduct, onHandleDeleteProduct } = props;

  const [manufacturerName, setManufacturerName] = useState("");
  const [categoryName, setCategoryName] = useState("");

  return (
    <>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Info</th>
          <th>Detail</th>
          <th>Star</th>
          <th>Image</th>
          <th>
            <Input
              type="select"
              className="input"
              value={manufacturerName}
              onChange={(e) => {
                setManufacturerName(e.target.value);
              }}
            >
              <option>NSX</option>
              {manufacturerList.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Input>
          </th>
          <th>
            <Input
              type="select"
              className="input"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
            >
              <option>Category</option>
              {categoryList.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </Input>
          </th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>

      <FormProductItem
        manufacturerName={manufacturerName}
        categoryName={categoryName}
        onHandleShowModalEditProduct={onHandleShowModalEditProduct}
        onHandleDeleteProduct={onHandleDeleteProduct}
      />
    </>
  );
};

export default FormProduct;
