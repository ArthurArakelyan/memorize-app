import {GET_MEMORIES, SET_MEMORY, DELETE_MEMORY, DELETE_MEMORIES} from "./actionTypes";

const initialState = {
  memories: [],
  loading: true,
  error: false
};

const memoriesReducer = (state = initialState, action = {}) => {
  const {memories} = state;
  const {type, payload} = action;

  switch(type) {
    case GET_MEMORIES:
      return payload;
    case SET_MEMORY:
      return {
        ...state,
        memories: [payload, ...memories]
      }
    case DELETE_MEMORY:
      return {
        ...state,
        memories: memories.filter(({id}) => id !== payload)
      }
    case DELETE_MEMORIES:
      return {...initialState};
    default:
      return state;
  }
}

export default memoriesReducer;