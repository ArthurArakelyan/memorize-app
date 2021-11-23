import {DELETE_USER, GET_USER, START_IMG_LOADING, SET_USER_IMG, DELETE_USER_IMG, CHANGE_USER_FIELD, CHANGE_USER_EMAIL} from "./actionTypes";

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  img: {
    url: '',
    loading: true,
    error: false
  }
};

const reducer = (state = initialState, action = {}) => {
  const {type, payload} = action;

  switch(type) {
    case GET_USER:
      return {
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        img: {
          url: payload.imgUrl ? payload.imgUrl : '',
          loading: false,
          error: false
        }
      }
    case DELETE_USER:
      return {...initialState};
    case START_IMG_LOADING:
      return {
        ...state,
        img: {...initialState.img}
      }
    case SET_USER_IMG:
      return {
        ...state,
        img: payload
      }
    case DELETE_USER_IMG:
      return {
        ...state,
        img: {
          ...initialState.img,
          loading: false
        }
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