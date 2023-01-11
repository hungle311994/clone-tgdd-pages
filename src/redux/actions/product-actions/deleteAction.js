import { deleteProductAPI } from "../../../api/ProductAPI";
import { DELETE_PRODUCT } from "../../constants/types";
import { actionFetchProductListAPI } from "./productAction";

export const actionDeleteProductAPI = (productDeleteAPI) => {
  return async (dispatch) => {
    const res = await deleteProductAPI(productDeleteAPI.id);
    dispatch(actionDeleteProduct(res));
    dispatch(actionFetchProductListAPI());
  };
};

export const actionDeleteProduct = (productDelete) => {
  return {
    type: DELETE_PRODUCT,
    payload: productDelete,
  };
};
