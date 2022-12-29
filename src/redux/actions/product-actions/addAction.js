import { ADD_PRODUCT } from "../../constants/types";
import { addProductAPI } from "../../../api/ProductAPI";
import { actionFetchProductListAPI } from "./productAction";

export const actionAddProductAPI = (productNewAPI) => {
  return (dispatch) => {
    return addProductAPI(productNewAPI).then((res) => {
      dispatch(actionAddProduct(res));
      dispatch(actionFetchProductListAPI());
    });
  };
};

export const actionAddProduct = (productNew) => {
  return {
    type: ADD_PRODUCT,
    payload: productNew,
  };
};
