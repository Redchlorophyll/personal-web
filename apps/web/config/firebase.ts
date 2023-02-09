// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB-FJmSmBXx2ABmEHWqLGAJ1j3aZlzvgM",
  authDomain: "web-authentication-c8e7d.firebaseapp.com",
  projectId: "web-authentication-c8e7d",
  storageBucket: "web-authentication-c8e7d.appspot.com",
  messagingSenderId: "1023539035750",
  appId: "1:1023539035750:web:15f753c48f90c071e077a7",
  measurementId: "G-TJ7X7FFX0P"
};

let analytics;
if (firebaseConfig?.projectId) {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { analytics, auth };