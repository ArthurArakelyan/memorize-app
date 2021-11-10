import {DELETE_USER, GET_USER} from "./actionTypes";

const initialState = {
  email: '',
  firstName: '',
  lastName: ''
};

const reducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case GET_USER:
      return payload;
    case DELETE_USER:
      return {}
    default:
      return state;
  }
}

export default reducer;