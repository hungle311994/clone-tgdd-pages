import {
  HIDE_MODAL_ADD_PRODUCT,
  HIDE_MODAL_UPDATE_PRODUCT,
  SHOW_MODAL_ADD_PRODUCT,
  SHOW_MODAL_UPDATE_PRODUCT,
} from "../../constants/types";

export const actionShowModalAddProduct = () => {
  return {
    type: SHOW_MODAL_ADD_PRODUCT,
  };
};

export const actionHideModalAddProduct = () => {
  return {
    type: HIDE_MODAL_ADD_PRODUCT,
  };
};

export const actionShowModalUpdateProduct = () => {
  return {
    type: SHOW_MODAL_UPDATE_PRODUCT,
  };
};

export const actionHideModalUpdateProduct = () => {
  return {
    type: HIDE_MODAL_UPDATE_PRODUCT,
  };
};
