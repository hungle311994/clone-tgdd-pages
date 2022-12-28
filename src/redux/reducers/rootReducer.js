import { combineReducers } from "redux";
import { modalAccountReducer } from "./account-reducers/modalAccountReducer";
import { productReducer } from "./product-reducers/productReducer";
import { modalProductReducer } from "./product-reducers/modalProductReducer";
import { manufacturerReducer } from "./product-reducers/manufacturerReducer";
import { categoryReducer } from "./product-reducers/categoryReducer";
import { accountReducer } from "./account-reducers/accountReducer";
import { showUpdateProductReducer } from "./product-reducers/showProductUpdateReducer";
import { productOrderReducer } from "./product-reducers/productOrderReducer";

export const rootReducer = combineReducers({
  // AccountRedux:
  modalAccountRedux: modalAccountReducer,
  accountRedux: accountReducer,

  // ProductRedux:
  modalProductRedux: modalProductReducer,
  productRedux: productReducer,
  manufacturerRedux: manufacturerReducer,
  categoryRedux: categoryReducer,
  showUpdateProductRedux: showUpdateProductReducer,
  //
  productOrderRedux: productOrderReducer,
});
