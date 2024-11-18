import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzBfPHmepBtvy6a10tRY_NWiFNYuKUbO8",
  authDomain: "sample-firebase-bd763.firebaseapp.com",
  projectId: "sample-firebase-bd763",
  storageBucket: "sample-firebase-bd763.firebasestorage.app",
  messagingSenderId: "998999823677",
  appId: "1:998999823677:web:fb089e961d9b50bbb6e154",
  measurementId: "G-8DR7XKE48B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth,provider,db};