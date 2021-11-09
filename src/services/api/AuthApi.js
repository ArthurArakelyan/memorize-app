import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {getDatabase, ref, set} from "firebase/database";

import setUserToLocalStorage from "../../util/setUserToLocalStorage";

initializeFirebaseApp();
const auth = getAuth();
const database = getDatabase();

class AuthApi {
  static async signIn(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const {user} = response;

      setUserToLocalStorage(user);
      return user;
    } catch(error) {
      console.error(error);
      alert(error.message);
      return false;
    }
  }

  static async signUp(firstName, lastName, email, password) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const {user} = response;

      setUserToLocalStorage(user);
      await set(ref(database, `users/${user.uid}`), {
        firstName,
        lastName,
        email
      });
      return user;
    } catch(error) {
      console.error(error);
      alert(error.message);
      return false;
    }
  }
}

export default AuthApi;