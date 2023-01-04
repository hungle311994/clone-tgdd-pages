import {
  ADD_ORDER_PRODUCT,
  DECREASE_ORDER_PRODUCT,
  DELETE_ORDER_PRODUCT,
  INCREASE_ORDER_PRODUCT,
} from "../../constants/types";

const initialState = {
  productOrderList: [],
  numberOrder: 0,
};

export const productOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER_PRODUCT:
      const productOrder = action.payload;
      const numberOrderAdd = state.numberOrder;
      const newProductOrderList = state.productOrderList;

      if (numberOrderAdd === 0) {
        newProductOrderList.push(productOrder);
      } else {
        let sameOrder = false;
        newProductOrderList.forEach((item, idx) => {
          if (item.id === productOrder.id) {
            newProductOrderList[idx].qty++;
            sameOrder = true;
          }
        });
        if (!sameOrder) {
          newProductOrderList.push(productOrder);
        }
      }

      return {
        ...state,
        productOrderList: newProductOrderList,
        numberOrder: numberOrderAdd + 1,
      };

    case DELETE_ORDER_PRODUCT:
      const idxDelete = action.payload;
      const productOrderDeleteList = state.productOrderList;
      const numberOrderDelete = state.numberOrder;
      const qty = productOrderDeleteList[idxDelete].qty;
      const i = productOrderDeleteList.findIndex(
        (item, idx) => idx === idxDelete
      );
      productOrderDeleteList.splice(i, 1);

      return {
        ...state,
        productOrderList: productOrderDeleteList,
        numberOrder: numberOrderDelete - qty,
      };

    case INCREASE_ORDER_PRODUCT:
      const idxIncrease = action.payload;
      const productOrderIncreaseList = state.productOrderList;
      const numberOrderIncrease = state.numberOrder;
      productOrderIncreaseList[idxIncrease].qty++;

      return {
        ...state,
        numberOrder: numberOrderIncrease + 1,
      };

    case DECREASE_ORDER_PRODUCT:
      const idxDecrease = action.payload;
      const productOrderDecreaseList = state.productOrderList;
      const numberOrderDecrease = state.numberOrder;

      if (productOrderDecreaseList[idxDecrease].qty <= 1) {
        return { ...state };
      } else {
        productOrderDecreaseList[idxDecrease].qty--;
      }

      return {
        ...state,
        numberOrder: numberOrderDecrease - 1,
      };

    default:
      return {
        ...state,
      };
  }
};
