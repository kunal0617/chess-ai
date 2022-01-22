import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNqGwOPOZZhtFcNE9Mqx_F7rqLokTKXqs",
  authDomain: "chess-ai-b1a6c.firebaseapp.com",
  projectId: "chess-ai-b1a6c",
  storageBucket: "chess-ai-b1a6c.appspot.com",
  messagingSenderId: "1023371698680",
  appId: "1:1023371698680:web:185ad5d85ee41369bff60d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
