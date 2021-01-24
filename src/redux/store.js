import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers from './reducers/items';


const storageState = window.localStorage.getItem('state');
const initialState = storageState ? JSON.parse(storageState) : {items: []};

const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools()
);

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('state', JSON.stringify(state));
})

export default store;
