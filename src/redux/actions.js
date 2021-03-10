// Action types
export const ADD_ITEM = 'ADD_ITEM';
export const ICREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SEARCH_ITEMS = 'SEARCH_ITEMS';

// Action creators
export const addItemAction = (item, count) => {
  return {
    type: ADD_ITEM,
    payload: { ...item, count },
  };
};

export const incrementItemAction = (itemId) => {
  return {
    type: ICREMENT_ITEM,
    payload: itemId,
  };
};

export const decrementItemAction = (itemId) => {
  return {
    type: DECREMENT_ITEM,
    payload: itemId,
  };
};

export const deleteItemAction = (itemId) => {
  return {
    type: DELETE_ITEM,
    payload: itemId,
  };
};

export const searchItemsAction = (params) => {
  return {
    type: SEARCH_ITEMS,
    payload: params,
  };
};
