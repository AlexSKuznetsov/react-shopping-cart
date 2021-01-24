import { ADD_TO_CART } from './action-types';

export function addToCart(items) {
  return {
    type: ADD_TO_CART,
    items
  };
}

