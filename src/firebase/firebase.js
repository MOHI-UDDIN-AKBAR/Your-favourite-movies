// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "movieapp-d08d9.firebaseapp.com",
  projectId: "movieapp-d08d9",
  storageBucket: "movieapp-d08d9.appspot.com",
  messagingSenderId: "831978203259",
  appId: "1:831978203259:web:248aba7da6ab9693a91ade",
  measurementId: "G-9FL1WWPXXJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default createUserWithEmailAndPassword;
