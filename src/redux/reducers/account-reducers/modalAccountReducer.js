import {
  HIDE_MODAL_ADD_ACCOUNT,
  HIDE_MODAL_UPDATE_ACCOUNT,
  SHOW_MODAL_ADD_ACCOUNT,
  SHOW_MODAL_UPDATE_ACCOUNT,
} from "../../constants/types";

const initialState = {
  showModalAddAccount: false,
  showModalUpdateAccount: false,
};

export const modalAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_ADD_ACCOUNT:
      return { ...state, showModalAddAccount: true };

    case HIDE_MODAL_ADD_ACCOUNT:
      return { ...state, showModalAddAccount: false };

    case SHOW_MODAL_UPDATE_ACCOUNT:
      return { ...state, showModalUpdateAccount: true };

    case HIDE_MODAL_UPDATE_ACCOUNT:
      return { ...state, showModalUpdateAccount: false };

    default:
      return {
        ...state,
      };
  }
};
