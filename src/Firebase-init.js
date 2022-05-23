// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqi7JyIMkYBCReiNa3xmjIIxtWtRt0soE",
  authDomain: "computer-mart-fb654.firebaseapp.com",
  projectId: "computer-mart-fb654",
  storageBucket: "computer-mart-fb654.appspot.com",
  messagingSenderId: "939265970450",
  appId: "1:939265970450:web:c1902a63f18986d015a3cb",
  measurementId: "G-CT2SNV80SW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(analytics);


export default auth