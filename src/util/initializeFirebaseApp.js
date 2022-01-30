import {initializeApp} from "firebase/app";

import REACT_APP from "../constants/reactApp";

const initializeFirebaseApp = () => {
  initializeApp({
    apiKey: process.env[`${REACT_APP}API_KEY`] || process.env.API_KEY,
    authDomain: process.env[`${REACT_APP}AUTH_DOMAIN`] || process.env.AUTH_DOMAIN,
    projectId: process.env[`${REACT_APP}PROJECT_ID`] || process.env.PROJECT_ID,
    storageBucket: process.env[`${REACT_APP}STORAGE_BUCKET`] || process.env.STORAGE_BUCKET,
    messagingSenderId: process.env[`${REACT_APP}MESSAGING_SENDER_ID`] || process.env.MESSAGING_SENDER_ID,
    appId: process.env[`${REACT_APP}APP_ID`] || process.env.APP_ID,
  });
}

export default initializeFirebaseApp;