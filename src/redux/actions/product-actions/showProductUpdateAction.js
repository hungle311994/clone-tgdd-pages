import { SHOW_UPDATE_PRODUCT } from "../../constants/types";

export const actionShowUpdateProduct = (productUpdate) => {
  return {
    type: SHOW_UPDATE_PRODUCT,
    payload: productUpdate,
  };
};
