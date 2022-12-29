import { ADD_ORDER_PRODUCT, DELETE_ORDER_PRODUCT } from "../../constants/types";

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

    case DELETE_ORDER_PRODUCT:
      const productOrderDelete = action.payload;
      const productOrderDeleteList = state.productOrderList;
      const i = productOrderDeleteList.findIndex(
        (item, idx) => idx === productOrderDelete
      );
      productOrderDeleteList.splice(i, 1);

      return {
        ...state,
        productOrderList: productOrderDeleteList,
      };

    default:
      return {
        ...state,
      };
  }
};
