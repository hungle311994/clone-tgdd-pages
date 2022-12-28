import { SHOW_UPDATE_PRODUCT } from "../../constants/types";

const initialState = {
  productUpdate: {},
};

export const showUpdateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_UPDATE_PRODUCT:
      return {
        ...state,
        productUpdate: action.payload,
      };

    default:
      return { ...state };
  }
};
