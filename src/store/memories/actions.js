import MemoriesApi from "../../services/api/MemoriesApi";

import {GET_MEMORIES, SET_MEMORY, DELETE_MEMORY, DELETE_MEMORIES} from "./actionTypes";

export function getMemories() {
  return async (dispatch) => {
    const response = await MemoriesApi.getMemories();
    dispatch({
      type: GET_MEMORIES,
      payload: response ? {
        memories: response,
        loading: false,
        error: false
      } : {
        memories: [],
        loading: false,
        error: true
      }
    });
  }
}

export function setMemory(memory) {
  return async (dispatch) => {
    const response = await MemoriesApi.setMemory(memory);
    dispatch({
      type: SET_MEMORY,
      payload: response
    });
  }
}

export function deleteMemoryAction(id, image) {
  return async (dispatch) => {
    const response = await MemoriesApi.deleteMemory(id, image);
    if(response) {
      dispatch({
        type: DELETE_MEMORY,
        payload: id
      });
    }
  }
}

export function deleteMemoriesAction() {
  return {
    type: DELETE_MEMORIES,
  };
}