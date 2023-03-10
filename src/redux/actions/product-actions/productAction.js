import { getProductAPI } from "../../../api/ProductAPI";
import { FETCH_PRODUCT_API } from "../../constants/types";

export const actionFetchProductListAPI = () => {
  return async (dispatch) => {
    const res = await getProductAPI();
    dispatch(actionFetchProductList(res.data.content));
  };
};

export const actionFetchProductList = (productListAPI) => {
  return {
    type: FETCH_PRODUCT_API,
    payload: productListAPI,
  };
};
