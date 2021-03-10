import {
  ADD_ITEM,
  ICREMENT_ITEM,
  DECREMENT_ITEM,
  DELETE_ITEM,
} from './actions';
import { initialState } from './store';

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newSum =
        state.sum + Number(action.payload.price) * Number(action.payload.count);
      // check if item already in cart
      if (state.items.find((el) => el.id === action.payload.id)) {
        const index = state.items.findIndex(
          (el) => el.id === action.payload.id
        );
        const newItems = [...state.items];
        newItems[index].count += Number(action.payload.count);
        return {
          ...state,
          items: [...newItems],
          sum: newSum,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          sum: newSum,
        };
      }
    case ICREMENT_ITEM:
      const incrementItems = [...state.items];
      const incrementIndex = incrementItems.findIndex(
        (el) => el.id === action.payload
      );
      incrementItems[incrementIndex].count++;
      const incrementSum = incrementItems.reduce(
        (acc, el) => acc + el.count * el.price,
        0
      );
      return {
        ...state,
        items: [...incrementItems],
        sum: incrementSum,
      };
    case DECREMENT_ITEM:
      const decrementItems = [...state.items];
      const decrementIndex = decrementItems.findIndex(
        (el) => el.id === action.payload
      );
      if (decrementItems[decrementIndex].count > 1) {
        decrementItems[decrementIndex].count--;
      }
      const decrementSum = decrementItems.reduce(
        (acc, el) => acc + el.count * el.price,
        0
      );
      return {
        ...state,
        items: [...decrementItems],
        sum: decrementSum,
      };
    case DELETE_ITEM:
      const deleteItemsList = [...state.items];
      const filtredList = deleteItemsList.filter(
        (el) => el.id !== action.payload
      );
      const deleteSum = filtredList.reduce(
        (acc, el) => acc + el.count * el.price,
        0
      );
      return {
        ...state,
        items: [...filtredList],
        sum: deleteSum,
      };
    default:
      return state;
  }
};
