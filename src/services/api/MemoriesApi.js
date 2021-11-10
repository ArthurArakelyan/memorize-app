import {getDatabase, ref, get, push, set} from "firebase/database";
import initializeFirebaseApp from "../../util/initializeFirebaseApp";

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

  static async setMemory(memory, uid) {
    try {
      const memoryRef = push(ref(database, `memories/${uid}`)).key;
      await set(ref(database, `memories/${uid}/${memoryRef}`), memory);
      return memory;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
}

export default MemoriesApi;