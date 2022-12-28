import {
  HIDE_MODAL_ADD_PRODUCT,
  HIDE_MODAL_UPDATE_PRODUCT,
  SHOW_MODAL_ADD_PRODUCT,
  SHOW_MODAL_UPDATE_PRODUCT,
} from "../../constants/types";

const initialState = {
  showModalAddProduct: false,
  showModalUpdateProduct: false,
};

export const modalProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL_ADD_PRODUCT:
      return { ...state, showModalAddProduct: true };

    case HIDE_MODAL_ADD_PRODUCT:
      return { ...state, showModalAddProduct: false };

    case SHOW_MODAL_UPDATE_PRODUCT:
      return { ...state, showModalUpdateProduct: true };

    case HIDE_MODAL_UPDATE_PRODUCT:
      return { ...state, showModalUpdateProduct: false };

    default:
      return {
        ...state,
      };
  }
};
