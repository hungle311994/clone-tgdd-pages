import { DELETE_RODUCT } from "../../constants/types";

const initialState = {
  productList: [],
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RODUCT:
      const productDelete = action.payload;
      const productListDeleted = state.productList;
      const i = productListDeleted.findIndex(
        (product) => product.id === productDelete
      );
      productListDeleted.splice(i, 1);

      return {
        ...state,
        productList: productListDeleted,
      };

    default:
      return {
        ...state,
      };
  }
};
