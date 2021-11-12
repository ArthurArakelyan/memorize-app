import {DELETE_USER, GET_USER, SET_USER_IMG, DELETE_USER_IMG} from "./actionTypes";

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  imgUrl: ''
};

const reducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case GET_USER:
      return {
        ...state,
        ...payload
      }
    case DELETE_USER:
      return {};
    case SET_USER_IMG:
      return {
        ...state,
        imgUrl: payload
      }
    case DELETE_USER_IMG: {
      return {
        ...state,
        imgUrl: ''
      }
    }
    default:
      return state;
  }
}

export default reducer;