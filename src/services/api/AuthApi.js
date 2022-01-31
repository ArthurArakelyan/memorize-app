import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

import Api from "./Api";
import UserApi from "./UserApi";

initializeFirebaseApp();
const auth = getAuth();

class AuthApi extends Api {
  static async signIn(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const {user} = response;

      return user;
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async signUp(firstName, lastName, email, password) {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const {user} = response;

      await UserApi.setUserToDatabase(firstName, lastName, email, user.uid);

      return user;
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static async logOut() {
    try {
      await signOut(auth);
    } catch(error) {
      super.errorHandler(error);
    }
  }

  static getUserId() {
    return getAuth().currentUser?.uid;
  }

  static checkAuth(callback) {
    return auth.onAuthStateChanged((user) => callback(user));
  }

  static get uid() {
    return this.getUserId();
  }

  static set uid(value) {
    throw new Error(`You can\'t change uid. (value: ${value})`);
  }

  static get user() {
    return getAuth().currentUser;
  }

  static set user(value) {
    throw new Error(`You can\'t change user. (value: ${value})`);
  }
}

export default AuthApi;