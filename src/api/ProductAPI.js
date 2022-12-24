import { api } from "./api";

const getProductAPI = () => {
  return api("GET", "products/", null);
};

const addProductAPI = (productNew) => {
  return api("POST", "products/", productNew);
};

const deleteProductAPI = (id) => {
  let url = "products/" + id;
  return api("DELETE", url, null);
};

const updateProductAPI = (productUpdate) => {
  let url = "products/" + productUpdate.id;
  return api("PUT", url, productUpdate);
};

export { getProductAPI, addProductAPI, deleteProductAPI, updateProductAPI };
