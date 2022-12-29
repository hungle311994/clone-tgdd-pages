import { getAccountAPI } from "../../../api/AccountAPI";
import { FETCH_ACCOUNT_API } from "../../constants/types";

export const actionFetchAccountListAPI = () => {
  return async (dispatch) => {
    return await getAccountAPI().then((res) => {
      dispatch(actionFetchAccountList(res.data));
    });
  };
};

export const actionFetchAccountList = (accountListAPI) => {
  return {
    type: FETCH_ACCOUNT_API,
    payload: accountListAPI,
  };
};
