import { FETCH_CATEGORY_API } from "../../constants/types";
import { getCategoryAPI } from "../../../api/CategoryAPI";

export const actionFetchCategoryListAPI = () => {
  return async (dispatch) => {
    const res = await getCategoryAPI();
    dispatch(actionFetchCategoryList(res.data));
  };
};

export const actionFetchCategoryList = (categoryListAPI) => {
  return {
    type: FETCH_CATEGORY_API,
    payload: categoryListAPI,
  };
};
