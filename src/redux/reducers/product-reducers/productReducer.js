import { FETCH_PRODUCT_API } from "../../constants/types";

const initialState = {
  productList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_API:
      return { ...state, productList: action.payload };

    default:
      return { ...state };
  }
};
