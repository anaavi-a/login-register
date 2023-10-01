// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANTIw9Sknr2dmL1Y_SXvs7jlwXfA494_M",
    authDomain: "fir-auth-84573.firebaseapp.com",
    projectId: "fir-auth-84573",
    storageBucket: "fir-auth-84573.appspot.com",
    messagingSenderId: "542523093811",
    appId: "1:542523093811:web:669a2fc5dba6fb0dd0c446"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();