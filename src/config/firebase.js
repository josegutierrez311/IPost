// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXHSCMHBb04sbBZ9JEn0E0gKCmEzCPmM",
  authDomain: "react-social-fb8e6.firebaseapp.com",
  projectId: "react-social-fb8e6",
  storageBucket: "react-social-fb8e6.appspot.com",
  messagingSenderId: "491528067028",
  appId: "1:491528067028:web:9bca2dbddd8fc373fa2841",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = new getFirestore(app);
