import { UPDATE_PRODUCT } from "../../constants/types";

const initialState = {
  productList: [],
};

export const updateReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT:
      const productUpdate = action.payload;
      const productListUpdated = state.productList;
      productListUpdated.push(productUpdate);

      return {
        ...state,
        productList: productListUpdated,
      };

    default:
      return {
        ...state,
      };
  }
};
