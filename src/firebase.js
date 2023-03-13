// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWVqnXyxhluH21oZWwLKUcEnUF7-uSysE",
  authDomain: "rooted-25a4d.firebaseapp.com",
  projectId: "rooted-25a4d",
  storageBucket: "rooted-25a4d.appspot.com",
  messagingSenderId: "504710863986",
  appId: "1:504710863986:web:15abaf63173aae9eae36eb",
  measurementId: "G-MY6CSXSVVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };

//https://firebase.google.com/docs/web/setup
//https://firebase.google.com/docs/web/learn-more#config-object