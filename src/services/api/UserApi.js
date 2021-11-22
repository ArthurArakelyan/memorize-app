import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {getAuth, updateEmail} from "firebase/auth";
import {getDatabase, ref, set, remove, get} from "firebase/database";
import {getStorage, ref as storageRef, uploadBytes, getDownloadURL, deleteObject} from "firebase/storage";

import AuthApi from "./AuthApi";

initializeFirebaseApp();
const auth = getAuth();
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
      const uid = AuthApi.getUserId();
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

  // img
  static async getUserImg() {
    try {
      const uid = AuthApi.getUserId();
      return await getDownloadURL(storageRef(storage, `users/${uid}/avatar.jpg`));
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async setUserImg(file) {
    try {
      const uid = AuthApi.getUserId();
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
      const uid = AuthApi.getUserId();
      await deleteObject(storageRef(storage,`users/${uid}/avatar.jpg`));
      await remove(ref(database, `users/${uid}/imgUrl`));
      return true;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  // fields
  static async changeUserField(field, newFieldValue) {
    try {
      const uid = AuthApi.getUserId();
      await set(ref(database, `users/${uid}/${field}`), newFieldValue);
      return newFieldValue;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async changeUserEmail(email) {
    try {
      const user = auth.currentUser;
      const response = await this.changeUserField('email', email);

      if(response) {
        try {
          await updateEmail(user, email);
        } catch(error) {
          alert('Try log out and sign in for email change.');
          console.error(error);
          alert(error.message);
        }
      }
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
}

export default UserApi;