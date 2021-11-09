import {initializeApp} from "firebase/app";

const REACT_APP = 'REACT_APP_';

const initializeFirebaseApp = () => {
  initializeApp({
    apiKey: process.env[`${REACT_APP}API_KEY`],
    authDomain: process.env[`${REACT_APP}AUTH_DOMAIN`],
    projectId: process.env[`${REACT_APP}PROJECT_ID`],
    storageBucket: process.env[`${REACT_APP}STORAGE_BUCKET`],
    messagingSenderId: process.env[`${REACT_APP}MESSAGING_SENDER_ID`],
    appId: process.env[`${REACT_APP}APP_ID`]
  });
}

export default initializeFirebaseApp;