import {DELETE_USER, GET_USER, SET_USER_IMG, DELETE_USER_IMG, CHANGE_USER_FIELD, CHANGE_USER_EMAIL} from "./actionTypes";

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
      return {...initialState};
    case SET_USER_IMG:
      return {
        ...state,
        imgUrl: payload
      }
    case DELETE_USER_IMG:
      return {
        ...state,
        imgUrl: ''
      }
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [payload.field]: payload.newFieldValue
      }
    case CHANGE_USER_EMAIL:
      return {
        ...state,
        email: payload
      }
    default:
      return state;
  }
}

export default reducer;