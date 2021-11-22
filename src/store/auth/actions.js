import AuthApi from "../../services/api/AuthApi";

import {SIGN_IN, SIGN_UP, SET_AUTH} from "./actionTypes";

export function signIn(email, password) {
  return async (dispatch) => {
    const response = await AuthApi.signIn(email, password);
    dispatch({
      type: SIGN_IN,
      payload: !!response
    });
  }
}

export function signUp(firstName, lastName, email, password) {
  return async (dispatch) => {
    const response = await AuthApi.signUp(firstName, lastName, email, password);
    dispatch({
      type: SIGN_UP,
      payload: !!response
    });
  }
}

export function setAuth(auth) {
  return {
    type: SET_AUTH,
    payload: auth
  }
}