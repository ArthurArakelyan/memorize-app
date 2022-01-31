import {getDatabase, ref, get, push, remove, set} from "firebase/database";
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import Api from './Api';
import AuthApi from "./AuthApi";

import objectToArray from "../../util/objectToArray";

initializeFirebaseApp();
const database = getDatabase();
const storage = getStorage();

class MemoriesApi extends Api {
  static async getMemories() {
    try {
      const uid = AuthApi.uid;
      const response = await get(ref(database,`memories/${uid}`));
      return objectToArray(response.val()).sort((prev, current) => {
        return new Date(current.date) - new Date(prev.date);
      });
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async setMemory(memory) {
    try {
      const uid = AuthApi.uid;
      const memoryRef = push(ref(database, `memories/${uid}`)).key;
      const memoryPath = `memories/${uid}/${memoryRef}`;
      const description = memory.description ? memory.description : null;

      if(memory.image) {
        await uploadBytes(storageRef(storage, memoryPath), memory.image);
        const image = await getDownloadURL(storageRef(storage, memoryPath));
        await set(ref(database, memoryPath), {
          ...memory,
          description,
          image
        });

        return {
          ...memory,
          id: memoryRef,
          image
        };
      }

      await set(ref(database, memoryPath), {
        ...memory,
        description
      });

      return {
        ...memory,
        id: memoryRef
      };
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async deleteMemory(id, image) {
    try {
      const uid = AuthApi.uid;
      await remove(ref(database, `memories/${uid}/${id}`));

      if(image) {
        await deleteObject(storageRef(storage, `memories/${uid}/${id}`));
      }

      return true;
    } catch(error) {
      super.errorHandler(error);
    }
  }
}

export default MemoriesApi;