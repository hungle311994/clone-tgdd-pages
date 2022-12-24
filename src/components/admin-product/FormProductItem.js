import React from "react";
import { Button } from "reactstrap";

const FormProductItem = (props) => {
  const {
    productList,
    manufacturerName,
    categoryName,
    onHandleShowModalEditProduct,
    onHandleDeleteProduct,
  } = props;

  const handleEdit = (productItem) => {
    onHandleShowModalEditProduct(productItem);
  };

  const handleDelete = (productDelete) => {
    onHandleDeleteProduct(productDelete);
  };

  const productListAPI = productList.map((productItem, idx) => {
    return (
      <tr key={idx}>
        <th>{productItem.id}</th>
        <td>{productItem.name}</td>
        <td>{productItem.price}</td>
        <td>{productItem.info}</td>
        <td>{productItem.detail}</td>
        <td>{productItem.ratingStar}</td>
        <td>
          <img
            src={require(`../../assets/product/${productItem.imageName}`)}
            style={{ width: "40px" }}
            alt={productItem.imageName}
          />
        </td>
        <td>{productItem.manufacturerName}</td>
        <td>{productItem.categoryName}</td>
        <td>
          <Button
            color="success"
            outline
            onClick={() => handleEdit(productItem)}
          >
            <span>
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
          </Button>
        </td>
        <td>
          <Button
            color="warning"
            outline
            onClick={() => handleDelete(productItem)}
          >
            <span>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </Button>
        </td>
      </tr>
    );
  });

  const manufacturerFilter = productList.filter(
    (item) => item.manufacturerName === manufacturerName
  );
  // console.log("manufacturerFilter", manufacturerFilter);

  const categoryFilter_ = manufacturerFilter.filter(
    (item) => item.categoryName === categoryName
  );

  const renderManufacturerFilter = manufacturerFilter.map((item, idx) => {
    return (
      <tr key={idx}>
        <th>{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.info}</td>
        <td>{item.detail}</td>
        <td>{item.ratingStar}</td>
        <td>
          <img
            src={require(`../../assets/product/${item.imageName}`)}
            style={{ width: "40px" }}
            alt={item.imageName}
          />
        </td>
        <td>{item.manufacturerName}</td>
        <td>{item.categoryName}</td>
        <td>
          {/* Edit Btn */}
          <Button color="success" outline onClick={() => handleEdit(item)}>
            <span>
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
          </Button>
        </td>
        <td>
          {/* Delete Btn */}
          <Button color="warning" outline onClick={() => handleDelete(item)}>
            <span>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </Button>
        </td>
      </tr>
    );
  });

  const renderCategoryFilter_ = categoryFilter_.map((item, idx) => {
    return (
      <tr key={idx}>
        <th>{item.id}</th>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.info}</td>
        <td>{item.detail}</td>
        <td>{item.ratingStar}</td>
        <td>
          <img
            src={require(`../../assets/product/${item.imageName}`)}
            style={{ width: "40px" }}
            alt={item.imageName}
          />
        </td>
        <td>{item.manufacturerName}</td>
        <td>{item.categoryName}</td>
        <td>
          {/* Edit Btn */}
          <Button color="success" outline onClick={() => handleEdit(item)}>
            <span>
              <ion-icon name="pencil-outline"></ion-icon>
            </span>
          </Button>
        </td>
        <td>
          {/* Delete Btn */}
          <Button color="warning" outline onClick={() => handleDelete(item)}>
            <span>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </Button>
        </td>
      </tr>
    );
  });

  const renderProductListAPI = !manufacturerName
    ? productListAPI
    : renderManufacturerFilter;

  return (
    <tbody>
      {!categoryName ? renderProductListAPI : renderCategoryFilter_}
    </tbody>
  );
};

export default FormProductItem;
