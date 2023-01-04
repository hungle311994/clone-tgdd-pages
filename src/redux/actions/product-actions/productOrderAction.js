import {
  ADD_ORDER_PRODUCT,
  DECREASE_ORDER_PRODUCT,
  DELETE_ORDER_PRODUCT,
  INCREASE_ORDER_PRODUCT,
} from "../../constants/types";

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

export const actionIncreaseOrder = (productOrder, idx) => {
  return {
    type: INCREASE_ORDER_PRODUCT,
    payload: idx,
  };
};

export const actionDecreaseOrder = (productOrder, idx) => {
  return {
    type: DECREASE_ORDER_PRODUCT,
    payload: idx,
  };
};
