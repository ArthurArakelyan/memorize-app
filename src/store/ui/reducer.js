import {START_LOADING, STOP_LOADING} from "./actionTypes";

const initialState = false;

const reducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case START_LOADING:
    case STOP_LOADING:
      return payload;
    default:
      return state;
  }
}

export default reducer;