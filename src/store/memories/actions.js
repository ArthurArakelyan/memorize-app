import MemoriesApi from "../../services/api/MemoriesApi";

import getUserFromLocalStorage from "../../util/getUserFromLocalStorage";

import {GET_MEMORIES, SET_MEMORY} from "./actionTypes";

export function getMemories(uid) {
  return async (dispatch) => {
    const response = await MemoriesApi.getMemories(uid);
    dispatch({
      type: GET_MEMORIES,
      payload: response
    });
  }
}

export function setMemory(memory) {
  return async (dispatch) => {
    const user = getUserFromLocalStorage();
    const response = await MemoriesApi.setMemory(memory, user.uid);
    dispatch({
      type: SET_MEMORY,
      payload: response
    });
  }
}