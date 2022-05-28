// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXWgV0WyocFeWFwEeXwzoKuVMKy6JjPjY",
  authDomain: "login-signin-48555.firebaseapp.com",
  projectId: "login-signin-48555",
  storageBucket: "login-signin-48555.appspot.com",
  messagingSenderId: "228699298421",
  appId: "1:228699298421:web:546a985e216d2129c9363c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
