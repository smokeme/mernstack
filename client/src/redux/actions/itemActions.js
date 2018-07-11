import axios from "axios";
// Types
import {
  GET_ITEMS,
  DELETE_ITEM,
  ADD_ITEM,
  ITEMS_LOADING
} from "../actions/types";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get("/api/items")
    .then(res => res.data)
    .then(data => dispatch({ type: GET_ITEMS, payload: data }));
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const addItem = name => dispatch => {
  axios
    .post("/api/items", { name: name })
    .then(res => res.data)
    .then(data =>
      dispatch({
        type: ADD_ITEM,
        payload: data
      })
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
