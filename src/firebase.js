// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCErfMdl7Ae2qgwauXTbZwq6KQ3Z5p6S4",
  authDomain: "fs-ecommerce-with-react.firebaseapp.com",
  projectId: "fs-ecommerce-with-react",
  storageBucket: "fs-ecommerce-with-react.firebasestorage.app",
  messagingSenderId: "1036835310901",
  appId: "1:1036835310901:web:edf59c1430649b7e76107c",
  measurementId: "G-XN7C55YG0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
