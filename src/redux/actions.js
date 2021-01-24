// Action types
export const ADD_ITEM = 'ADD_ITEM';
export const ICREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

// Action creators

export const addItemAction = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
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
    type: DECREMENT_ITEM,
    payload: itemId,
  };
};
