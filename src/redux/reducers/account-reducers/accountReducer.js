import { FETCH_ACCOUNT_API } from "../../constants/types";

const initialState = {
  accountList: [],
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNT_API:
      return { ...state, accountList: action.payload };

    default:
      return { ...state };
  }
};
