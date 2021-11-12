import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

import UserApi from "./UserApi";

import setUserToLocalStorage from "../../util/setUserToLocalStorage";

initializeFirebaseApp();
const auth = getAuth();

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
    }
  }

  static async signUp(firstName, lastName, email, password) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const {user} = response;

      setUserToLocalStorage(user);
      await UserApi.setUserToDatabase(firstName, lastName, email, user.uid);

      return user;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }
}

export default AuthApi;