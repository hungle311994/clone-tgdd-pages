import { ADD_PRODUCT } from "../../constants/types";

const initialState = {
  productList: [],
};

export const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const productNew = action.payload;
      const newProductList = state.productList;
      newProductList.push(productNew);

      return {
        ...state,
        productList: newProductList,
      };

    default:
      return {
        ...state,
      };
  }
};
