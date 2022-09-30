// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLrnXTKqKIgnPqxEX-_POD8EPknYzBmDM",
  authDomain: "office-viewer-2929b.firebaseapp.com",
  projectId: "office-viewer-2929b",
  storageBucket: "office-viewer-2929b.appspot.com",
  messagingSenderId: "784109337953",
  appId: "1:784109337953:web:7a9640fe1920b4e25e5920",
  measurementId: "G-XD78D1THHF",
  databaseURL: "https://office-viewer-2929b-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const analytics = getAnalytics(app);