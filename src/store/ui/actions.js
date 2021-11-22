import {START_LOADING, STOP_LOADING} from "./actionTypes";

export function startLoading() {
  return {
    type: START_LOADING,
    payload: true
  }
}

export function stopLoading() {
  return {
    type: STOP_LOADING,
    payload: false
  }
}