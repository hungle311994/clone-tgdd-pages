import {
  HIDE_MODAL_ADD_ACCOUNT,
  HIDE_MODAL_UPDATE_ACCOUNT,
  SHOW_MODAL_ADD_ACCOUNT,
  SHOW_MODAL_UPDATE_ACCOUNT,
} from "../../constants/types";

export const actionShowModalAddAccount = () => {
  return {
    type: SHOW_MODAL_ADD_ACCOUNT,
  };
};

export const actionHideModalAddAccount = () => {
  return {
    type: HIDE_MODAL_ADD_ACCOUNT,
  };
};

export const actionShowModalUpdateAccount = () => {
  return {
    type: SHOW_MODAL_UPDATE_ACCOUNT,
  };
};

export const actionHideModalUpdateAccount = () => {
  return {
    type: HIDE_MODAL_UPDATE_ACCOUNT,
  };
};
