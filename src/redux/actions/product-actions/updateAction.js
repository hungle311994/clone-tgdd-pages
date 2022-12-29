import { UPDATE_PRODUCT } from "../../constants/types";
import { actionFetchProductListAPI } from "./productAction";
import { updateProductAPI } from "../../../api/ProductAPI";

export const actionUpdateProductAPI = (productUpdateAPI) => {
  return async (dispatch) => {
    return await updateProductAPI(productUpdateAPI).then((res) => {
      dispatch(actionUpdateProduct(res));
      dispatch(actionFetchProductListAPI());
    });
  };
};

export const actionUpdateProduct = (productUpdate) => {
  return {
    type: UPDATE_PRODUCT,
    payload: productUpdate,
  };
};
