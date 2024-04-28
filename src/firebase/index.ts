// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBLETAk2uJjZgly1EZ9rWQ78Tog3_bmvU",
  authDomain: "sqlfinal-e18df.firebaseapp.com",
  projectId: "sqlfinal-e18df",
  storageBucket: "sqlfinal-e18df.appspot.com",
  messagingSenderId: "617114283164",
  appId: "1:617114283164:web:0983c5aecea08ea87f5159",
  measurementId: "G-EZW535JDH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service


