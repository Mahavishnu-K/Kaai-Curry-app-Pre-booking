import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANA7SDSEE4Z4S3cm0daWMDVROmxnuFleg",
  authDomain: "kaai-curry-pre-booking.firebaseapp.com",
  projectId: "kaai-curry-pre-booking",
  storageBucket: "kaai-curry-pre-booking.firebasestorage.com",
  messagingSenderId: "717317971733",
  appId: "1:717317971733:web:093c593d8aec85d7ffd31c",
  measurementId: "G-5835PDLY4D"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };