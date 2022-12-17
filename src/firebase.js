// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFmLrzNaif7uZnGFDdSZI5RxVoIiepx3M",
  authDomain: "money-app-5046.firebaseapp.com",
  projectId: "money-app-5046",
  storageBucket: "money-app-5046.appspot.com",
  messagingSenderId: "174263446428",
  appId: "1:174263446428:web:3aabf1c63e9291e13db659"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

export { auth, db }