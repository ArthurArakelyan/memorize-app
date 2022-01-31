import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {updateEmail} from "firebase/auth";
import {getDatabase, ref, set, remove, get} from "firebase/database";
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

import Api from "./Api";
import AuthApi from "./AuthApi";

initializeFirebaseApp();
const database = getDatabase();
const storage = getStorage();

class UserApi extends Api {
  static async setUserToDatabase(firstName, lastName, email, uid) {
    try {
      return await set(ref(database, `users/${uid}`), {
        firstName,
        lastName,
        email
      });
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async getUser() {
    try {
      const uid = AuthApi.uid;
      const response = await get(ref(database, `users/${uid}`));
      return {
        ...response.val(),
        uid
      };
    } catch(error) {
      super.errorHandler(error);
    }
  }

  // img
  static async getUserImg() {
    try {
      const uid = AuthApi.uid;
      return await getDownloadURL(storageRef(storage, `users/${uid}/avatar.jpg`));
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async setUserImg(file) {
    try {
      const uid = AuthApi.uid;
      const storageUserRef = storageRef(storage, `users/${uid}/avatar.jpg`);

      await uploadBytes(storageUserRef, file);
      const url = await this.getUserImg();
      await set(ref(database, `users/${uid}/imgUrl`), url);

      return url;
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async deleteUserImg() {
    try {
      const uid = AuthApi.getUserId();
      await deleteObject(storageRef(storage,`users/${uid}/avatar.jpg`));
      await remove(ref(database, `users/${uid}/imgUrl`));
      return true;
    } catch(error) {
      super.errorHandler(error);
    }
  }

  // fields
  static async changeUserField(field, newFieldValue) {
    try {
      const uid = AuthApi.uid;
      await set(ref(database, `users/${uid}/${field}`), newFieldValue);
      return newFieldValue;
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async changeUserEmail(email) {
    try {
      const user = AuthApi.user;
      await updateEmail(user, email);
      await this.changeUserField('email', email);
    } catch(error) {
      super.errorHandler(error);
    }
  }
}

export default UserApi;