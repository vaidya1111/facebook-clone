// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBm9n3MLzAoFMvtEZIKzJ-jG27Ac54EnRM",
    authDomain: "facebook-clone-be8e9.firebaseapp.com",
    projectId: "facebook-clone-be8e9",
    storageBucket: "facebook-clone-be8e9.appspot.com",
    messagingSenderId: "1002636024912",
    appId: "1:1002636024912:web:87fa009191a7b2f87d0555",
    measurementId: "G-PLK5NMWS6P"
  };


//to connect React with firebase backend..

const firebaseApp= initializeApp(firebaseConfig);
const db = getFirestore(); // get access to firebase db. Meanwhile go to firebase and create a DB.
const provider = new GoogleAuthProvider();// tells firebase that we want the google login service
const auth = getAuth();
export {auth, signInWithPopup,provider};
export {collection, getDocs}
export default db;
