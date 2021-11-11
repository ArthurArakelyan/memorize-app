import {getDatabase, ref, get, push, remove, set} from "firebase/database";
import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import getUserFromLocalStorage from "../../util/getUserFromLocalStorage";
import objectToArray from "../../util/objectToArray";

initializeFirebaseApp();
const database = getDatabase();

class MemoriesApi {
  static async getMemories(uid) {
    try {
      const response = await get(ref(database,`memories/${uid}`));
      return objectToArray(response.val());
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async setMemory(memory) {
    try {
      const {uid} = getUserFromLocalStorage();
      const memoryRef = push(ref(database, `memories/${uid}`)).key;
      await set(ref(database, `memories/${uid}/${memoryRef}`), memory);
      return {
        id: memoryRef,
        ...memory
      };
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async deleteMemory(id) {
    try {
      const {uid} = getUserFromLocalStorage();
      await remove(ref(database, `memories/${uid}/${id}`));
      return true;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
}

export default MemoriesApi;