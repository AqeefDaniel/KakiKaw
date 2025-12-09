// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWHHaOlHiDqEPRGqHPE0YsE3kGsallHjM",
  authDomain: "kakikaw-9c882.firebaseapp.com",
  projectId: "kakikaw-9c882",
  storageBucket: "kakikaw-9c882.firebasestorage.app",
  messagingSenderId: "688033414618",
  appId: "1:688033414618:web:945293fac138d877fc94e3",
  measurementId: "G-NEWGPFRD2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;