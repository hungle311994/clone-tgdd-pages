import { ADD_ORDER_PRODUCT } from "../../constants/types";

export const actionAddOrder = (productOrder) => {
  return {
    type: ADD_ORDER_PRODUCT,
    payload: productOrder,
  };
};
