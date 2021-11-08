import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "auth-cce8a.firebaseapp.com",
  databaseURL:
    "https://auth-cce8a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "auth-cce8a",
  storageBucket: "auth-cce8a.appspot.com",
  messagingSenderId: "140162635166",
  appId: "1:140162635166:web:5fdb0cc83e9c3e34cfb28f",
  measurementId: "G-ZWKKLT3R7L",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
