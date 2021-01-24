import { ADD_TO_CART } from '../actions/action-types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.items],
      };
    default:
      return state;
  }
};
