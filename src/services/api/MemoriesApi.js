import {getDatabase, ref, get, push, remove, set} from "firebase/database";
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import AuthApi from "./AuthApi";

import objectToArray from "../../util/objectToArray";

initializeFirebaseApp();
const database = getDatabase();
const storage = getStorage();

class MemoriesApi {
  static async getMemories() {
    try {
      const uid = AuthApi.getUserId();
      const response = await get(ref(database,`memories/${uid}`));
      return objectToArray(response.val()).sort((prev, current) => {
        return new Date(current.date) - new Date(prev.date);
      });
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async setMemory(memory) {
    try {
      const uid = AuthApi.getUserId();
      const memoryRef = push(ref(database, `memories/${uid}`)).key;
      const memoryPath = `memories/${uid}/${memoryRef}`;

      if(memory.image) {
        await uploadBytes(storageRef(storage, memoryPath), memory.image);
        const image = await getDownloadURL(storageRef(storage, memoryPath));
        await set(ref(database, memoryPath), {
          ...memory,
          image
        });

        return {
          ...memory,
          id: memoryRef,
          image
        };
      }

      await set(ref(database, memoryPath), memory);

      return {
        ...memory,
        id: memoryRef
      };
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async deleteMemory(id) {
    try {
      const uid = AuthApi.getUserId();
      await remove(ref(database, `memories/${uid}/${id}`));
      return true;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
}

export default MemoriesApi;