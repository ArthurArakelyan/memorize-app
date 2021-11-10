import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, ref, set, get} from "firebase/database";

import setUserToLocalStorage from "../../util/setUserToLocalStorage";

initializeFirebaseApp();
const auth = getAuth();
const database = getDatabase();

class AuthApi {
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

  static async signIn(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const {user} = response;

      setUserToLocalStorage(user);
      return user;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async signUp(firstName, lastName, email, password) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const {user} = response;

      setUserToLocalStorage(user);
      await this.setUserToDatabase(firstName, lastName, email, user.uid);

      return user;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static async getUser(uid) {
    try {
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
}

export default AuthApi;