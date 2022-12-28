import { getProductAPI } from "../../../api/ProductAPI";
import { FETCH_PRODUCT_API } from "../../constants/types";

export const actionFetchProductListAPI = () => {
  return async (dispatch) => {
    return getProductAPI().then((res) => {
      dispatch(actionFetchProductList(res.data.content));
    });
  };
};

export const actionFetchProductList = (productListAPI) => {
  return {
    type: FETCH_PRODUCT_API,
    payload: productListAPI,
  };
};
