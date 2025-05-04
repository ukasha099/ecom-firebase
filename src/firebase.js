import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZ9mD-9H9qX0eo8zIS275ttpB_8TpvgHU",
    authDomain: "fir-3-e0dcd.firebaseapp.com",
    projectId: "fir-3-e0dcd",
    storageBucket: "fir-3-e0dcd.firebasestorage.app",
    messagingSenderId: "158235869133",
    appId: "1:158235869133:web:1b8b008b947a7c3cef4e84"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
