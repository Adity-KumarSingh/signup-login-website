// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYxXgfaUiOFMdSwlncU8M8fhsbDGlA02A",
  authDomain: "react-firebase-auth-app-83e00.firebaseapp.com",
  projectId: "react-firebase-auth-app-83e00",
  storageBucket: "react-firebase-auth-app-83e00.appspot.com",
  messagingSenderId: "162152473483",
  appId: "1:162152473483:web:1cb1bf39ef94b8ed9f858e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
