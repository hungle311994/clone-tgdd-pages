import { FETCH_MANUFACTURER_API } from "../../constants/types";
import { getManufacturerAPI } from "../../../api/ManufacturerAPI";

export const actionFetchManufacturerListAPI = () => {
  return async (dispatch) => {
    const res = await getManufacturerAPI();
    dispatch(actionFetchManufacturerList(res.data));
  };
};

export const actionFetchManufacturerList = (manufacturerListAPI) => {
  return {
    type: FETCH_MANUFACTURER_API,
    payload: manufacturerListAPI,
  };
};
