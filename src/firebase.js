import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUkrLjMzIKEaQoOA0QHoSpZsyrHc9Zg7w",
  authDomain: "quizzapp-c855a.firebaseapp.com",
  projectId: "quizzapp-c855a",
  storageBucket: "quizzapp-c855a.appspot.com",
  messagingSenderId: "72395814212",
  appId: "1:72395814212:web:7e7d2be2b6e339dbff1311",
  measurementId: "G-2X8PP8FDZC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const authentication = firebase.auth();
export const db = firebase.firestore();
