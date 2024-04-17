// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// import { getAuth } from 'firebase/authDomain'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaZhZDgcMImX-4corHZRIe7hrYYZ7c9F0",
  authDomain: "english-app-e511d.firebaseapp.com",
  projectId: "english-app-e511d",
  storageBucket: "english-app-e511d.appspot.com",
  messagingSenderId: "662362792976",
  appId: "1:662362792976:web:ff9169a843c436f7af9695",
  measurementId: "G-TQN7N0T93H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
