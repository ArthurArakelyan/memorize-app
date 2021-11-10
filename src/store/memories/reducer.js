import {GET_MEMORIES, SET_MEMORY} from "./actionTypes";

const initialState = [];

const memoriesReducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case GET_MEMORIES:
      return payload;
    case SET_MEMORY:
      return [...state, payload];
    default:
      return state;
  }
}

export default memoriesReducer;