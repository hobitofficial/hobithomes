// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5L8Zoei82Xwgnl0reqlL9yyrg6pOTRuc",
  authDomain: "hobithomes.firebaseapp.com",
  projectId: "hobithomes",
  storageBucket: "hobithomes.appspot.com",
  messagingSenderId: "366366188874",
  appId: "1:366366188874:web:13571c2f02340751b94db3",
  measurementId: "G-2RQJXYYNH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
