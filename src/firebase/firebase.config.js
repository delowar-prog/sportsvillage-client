// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCodwg9sC8AqS5hL3zGQEfllaeJoX2uxS4",
  authDomain: "sports-village-auth.firebaseapp.com",
  projectId: "sports-village-auth",
  storageBucket: "sports-village-auth.appspot.com",
  messagingSenderId: "700155124897",
  appId: "1:700155124897:web:c9069c92a93741745b24e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app