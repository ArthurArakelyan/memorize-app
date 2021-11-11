import {GET_MEMORIES, SET_MEMORY, DELETE_MEMORY} from "./actionTypes";

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
        memories: [...memories, payload]
      }
    case DELETE_MEMORY:
      console.log(memories)
      console.log(memories.filter(({id}) => id !== payload))
      return {
        ...state,
        memories: memories.filter(({id}) => id !== payload)
      }
    default:
      return state;
  }
}

export default memoriesReducer;