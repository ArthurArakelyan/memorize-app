import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {getDatabase, ref, set, remove, get} from "firebase/database";
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

import getUserFromLocalStorage from "../../util/getUserFromLocalStorage";

initializeFirebaseApp();
const database = getDatabase();
const storage = getStorage();

class UserApi {
  static async setUserToDatabase(firstName, lastName, email, uid) {
    try {
      return await set(ref(database, `users/${uid}`), {
        firstName,
        lastName,
        email
      });
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async getUser() {
    try {
      const {uid} = getUserFromLocalStorage();
      const response = await get(ref(database, `users/${uid}`));
      return {
        ...response.val(),
        uid
      };
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async getUserImg() {
    try {
      const {uid} = getUserFromLocalStorage();
      return await getDownloadURL(storageRef(storage, `users/${uid}/avatar.jpg`));
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async setUserImg(file) {
    try {
      const {uid} = getUserFromLocalStorage();
      const storageUserRef = storageRef(storage, `users/${uid}/avatar.jpg`);

      await uploadBytes(storageUserRef, file);
      const url = await this.getUserImg();
      await set(ref(database, `users/${uid}/imgUrl`), url);

      return url;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async deleteUserImg() {
    try {
      const {uid} = getUserFromLocalStorage();
      await deleteObject(storageRef(storage,`users/${uid}/avatar.jpg`));
      await remove(ref(database, `users/${uid}/imgUrl`));
      return true;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
}

export default UserApi;