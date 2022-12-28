import { FETCH_CATEGORY_API } from "../../constants/types";

const initialState = {
  categoryList: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_API:
      return { ...state, categoryList: action.payload };

    default:
      return { ...state };
  }
};
