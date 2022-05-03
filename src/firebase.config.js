import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCILRAuhbBUk2Bz_xymi1TlIH9I8-ntwGA",
  authDomain: "house-marketplace-app-97740.firebaseapp.com",
  projectId: "house-marketplace-app-97740",
  storageBucket: "house-marketplace-app-97740.appspot.com",
  messagingSenderId: "1024016805509",
  appId: "1:1024016805509:web:8b1e5e382a91ed7bcbc3ec",
  measurementId: "G-FHCMYK2Z5S"
};
  
// Initialize Firebase
// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()