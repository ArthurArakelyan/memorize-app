import AuthApi from "../../services/api/AuthApi";

import getUserFromLocalStorage from "../../util/getUserFromLocalStorage";

import {GET_USER, DELETE_USER} from "./actionTypes";

export function getUser() {
  return async (dispatch) => {
    const uid = getUserFromLocalStorage().uid;
    const user = await AuthApi.getUser(uid);
    dispatch({
      type: GET_USER,
      payload: user
    });
  }
}

export function deleteUserAction() {
  return {
    type: DELETE_USER
  }
}