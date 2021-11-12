import UserApi from "../../services/api/UserApi";

import {GET_USER, DELETE_USER, SET_USER_IMG, DELETE_USER_IMG} from "./actionTypes";

export function getUser() {
  return async (dispatch) => {
    const user = await UserApi.getUser();
    dispatch({
      type: GET_USER,
      payload: user ? user : {}
    });
  }
}

export function deleteUserAction() {
  return {
    type: DELETE_USER
  }
}

export function setUserImgAction(file) {
  return async (dispatch) => {
    const url = await UserApi.setUserImg(file);
    dispatch({
      type: SET_USER_IMG,
      payload: url
    });
  }
}

export function deleteUserImgAction() {
  return async (dispatch) => {
    await UserApi.deleteUserImg();
    dispatch({type: DELETE_USER_IMG});
  }
}