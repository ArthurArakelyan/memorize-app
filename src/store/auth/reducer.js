import {SIGN_IN, SIGN_UP, SET_AUTH} from "./actionTypes";

const initialState = null;

const reducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case SIGN_IN:
    case SIGN_UP:
    case SET_AUTH:
      return payload;
    default:
      return state;
  }
}

export default reducer;