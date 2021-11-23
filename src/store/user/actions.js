import UserApi from "../../services/api/UserApi";

import {GET_USER, DELETE_USER, START_IMG_LOADING, SET_USER_IMG, DELETE_USER_IMG, CHANGE_USER_FIELD, CHANGE_USER_EMAIL} from "./actionTypes";

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

export function startImgLoading() {
  return {
    type: START_IMG_LOADING
  }
}

export function setUserImgAction(file) {
  return async (dispatch) => {
    dispatch(startImgLoading());

    const url = await UserApi.setUserImg(file);

    dispatch({
      type: SET_USER_IMG,
      payload: url ? {
        url,
        loading: false,
        error: false
      } : {
        url: '',
        loading: false,
        error: true
      }
    });
  }
}

export function deleteUserImgAction() {
  return async (dispatch) => {
    dispatch(startImgLoading());
    await UserApi.deleteUserImg();
    dispatch({type: DELETE_USER_IMG});
  }
}

export function changeUserFieldAction(field, newFieldValue) {
  return async (dispatch, getState) => {
    const state = getState().userReducer;
    const response = await UserApi.changeUserField(field, newFieldValue);
    dispatch({
      type: CHANGE_USER_FIELD,
      payload: response ? {field, newFieldValue} : {
        field, newFieldValue: state[field]
      }
    })
  }
}

export function changeUserEmailAction(email) {
  return async (dispatch) => {
    await UserApi.changeUserEmail(email);
    dispatch({
      type: CHANGE_USER_EMAIL,
      payload: email
    });
  }
}