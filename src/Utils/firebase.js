// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqDVZnxTLdP2fGAr0LfDicfWceMQdvCF4",
  authDomain: "netflix-a89d8.firebaseapp.com",
  projectId: "netflix-a89d8",
  storageBucket: "netflix-a89d8.firebasestorage.app",
  messagingSenderId: "77365943055",
  appId: "1:77365943055:web:f638fb54c302d728287c7a",
  measurementId: "G-EKGZ405S8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();