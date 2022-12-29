import { deleteProductAPI } from "../../../api/ProductAPI";
import { DELETE_PRODUCT } from "../../constants/types";
import { actionFetchProductListAPI } from "./productAction";

export const actionDeleteProductAPI = (productDeleteAPI) => {
  return async (dispatch) => {
    return await deleteProductAPI(productDeleteAPI.id).then((res) => {
      dispatch(actionDeleteProduct(res));
      dispatch(actionFetchProductListAPI());
    });
  };
};

export const actionDeleteProduct = (productDelete) => {
  return {
    type: DELETE_PRODUCT,
    payload: productDelete,
  };
};
