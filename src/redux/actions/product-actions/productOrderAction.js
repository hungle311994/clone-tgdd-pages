import { ADD_ORDER_PRODUCT, DELETE_ORDER_PRODUCT } from "../../constants/types";

export const actionAddOrder = (productOrder) => {
  return {
    type: ADD_ORDER_PRODUCT,
    payload: productOrder,
  };
};

export const actionDeleleOrder = (productOrderDelete, idx) => {
  return {
    type: DELETE_ORDER_PRODUCT,
    payload: idx,
  };
};
