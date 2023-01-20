// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLbZ-zpN874dl6emQ21t3c2v_kMNH78ro",
  authDomain: "facebook2point0-19680.firebaseapp.com",
  projectId: "facebook2point0-19680",
  storageBucket: "facebook2point0-19680.appspot.com",
  messagingSenderId: "213153736864",
  appId: "1:213153736864:web:8bf955a32a4f09241d41c5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const db = getFirestore()
const storage = getStorage()

export { app, db, storage };
