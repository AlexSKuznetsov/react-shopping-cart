import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer, searchReducer } from './reducers';
import productsStore from '../store';

const storageState = window.localStorage.getItem('state');
export const initialState = storageState
  ? JSON.parse(storageState)
  : { cart: { items: [], sum: 0 }, products: productsStore };

const store = createStore(
  combineReducers({
    cart: cartReducer,
    products: searchReducer,
  }),
  initialState,
  composeWithDevTools()
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;
