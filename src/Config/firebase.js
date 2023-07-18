// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRN0L08LZYhq6ZSjUW1rYd5nR4ZgJDNH0",
  authDomain: "app-chat-1fe9c.firebaseapp.com",
  projectId: "app-chat-1fe9c",
  storageBucket: "app-chat-1fe9c.appspot.com",
  messagingSenderId: "222014254980",
  appId: "1:222014254980:web:afd54f5b294e3763c0f7d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}