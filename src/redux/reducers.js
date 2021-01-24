import { ADD_ITEM } from './actions';
import { combineReducers } from 'redux';

const store = {
  items: [],
  sum: 0,
};

const cartReducer = (state = store, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        sum: state.sum + Number(action.payload.price),
      };
    default:
      return state;
  }
};

export default combineReducers({
  cart: cartReducer,
});
