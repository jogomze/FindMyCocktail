// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb9kobPlG9sPKlR3jPvDOi82DsAPMFWOc",
  authDomain: "findmycocktail.firebaseapp.com",
  projectId: "findmycocktail",
  storageBucket: "findmycocktail.appspot.com",
  messagingSenderId: "994078821523",
  appId: "1:994078821523:web:c8452da088e4937e799166",
  measurementId: "G-ZEMVJHTEWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);