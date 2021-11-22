import initializeFirebaseApp from "../../util/initializeFirebaseApp";

import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

import UserApi from "./UserApi";

initializeFirebaseApp();
const auth = getAuth();

class AuthApi {
  static async signIn(email, password) {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const {user} = response;

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

      await UserApi.setUserToDatabase(firstName, lastName, email, user.uid);

      return user;
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  static getUserId() {
    return auth.currentUser.uid;
  }

  static checkAuth(callback) {
    return auth.onAuthStateChanged((user) => callback(user));
  }
}

export default AuthApi;