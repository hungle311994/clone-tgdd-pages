import { ADD_ORDER_PRODUCT } from "../../constants/types";

const initialState = {
  productOrderList: [],
};

export const productOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER_PRODUCT:
      const productOrder = action.payload;
      const newProductOrderList = state.productOrderList;
      newProductOrderList.push(productOrder);

      return {
        ...state,
        productOrderList: newProductOrderList,
      };

    default:
      return {
        ...state,
      };
  }
};
