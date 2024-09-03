// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfjWFLKSM5DYAagK6XFFOGneYUvJ891Zw",
  authDomain: "ecomerce-house-gamer.firebaseapp.com",
  projectId: "ecomerce-house-gamer",
  storageBucket: "ecomerce-house-gamer.appspot.com",
  messagingSenderId: "732654998861",
  appId: "1:732654998861:web:b5168ca5ff2b8f9d02d304"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const db=getFirestore(app)