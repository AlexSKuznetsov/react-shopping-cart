import { ADD_ITEM } from './actions';
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
    default:
      return state;
  }
};
