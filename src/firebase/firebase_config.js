// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnAtYH7O5cSR4PNMF-6Fgmn34KS8-zsXY",
  authDomain: "dragon-news-6c82c.firebaseapp.com",
  projectId: "dragon-news-6c82c",
  storageBucket: "dragon-news-6c82c.firebasestorage.app",
  messagingSenderId: "1003016371000",
  appId: "1:1003016371000:web:351da9531dd76ad6201fcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
