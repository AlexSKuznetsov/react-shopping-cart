import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducers';

const storageState = window.localStorage.getItem('state');
export const initialState = storageState
  ? JSON.parse(storageState)
  : { cart: { items: [], sum: 0 } };

const store = createStore(
  combineReducers({
    cart: cartReducer,
  }),
  initialState,
  composeWithDevTools()
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
});

export default store;
