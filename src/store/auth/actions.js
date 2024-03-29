import AuthApi from "../../services/api/AuthApi";

import {SET_AUTH} from "./actionTypes";

export function setAuth(auth) {
  return {
    type: SET_AUTH,
    payload: auth
  }
}

export function signIn(email, password) {
  return async (dispatch) => {
    const response = await AuthApi.signIn(email, password);
    dispatch(setAuth(!!response));
  }
}

export function signUp(firstName, lastName, email, password) {
  return async (dispatch) => {
    const response = await AuthApi.signUp(firstName, lastName, email, password);
    dispatch(setAuth(!!response));
  }
}

export function logOut() {
  return async (dispatch) => {
    await AuthApi.logOut();
    dispatch(setAuth(false));
  }
}