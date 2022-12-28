import { FETCH_MANUFACTURER_API } from "../../constants/types";

const initialState = {
  manufacturerList: [],
};

export const manufacturerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MANUFACTURER_API:
      return { ...state, manufacturerList: action.payload };

    default:
      return { ...state };
  }
};
