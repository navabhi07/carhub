// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
    
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carhub-9d8e7.firebaseapp.com",
  projectId: "carhub-9d8e7",
  storageBucket: "carhub-9d8e7.firebasestorage.app",
  messagingSenderId: "1039297520646",
  appId: "1:1039297520646:web:82047841d5aaa153338f87"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);