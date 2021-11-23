import {SET_AUTH} from "./actionTypes";

const initialState = null;

const reducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case SET_AUTH:
      return payload;
    default:
      return state;
  }
}

export default reducer;