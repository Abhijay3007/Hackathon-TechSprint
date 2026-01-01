// import admin from "firebase-admin";
// import serviceAccount from "./serviceAccount.json" assert { type: "json" };

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// export const db = admin.firestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjdWCAmAEqreUVEwUhdMXoGHPl0pwotaE",
  authDomain: "hackathon-techsprint.firebaseapp.com",
  projectId: "hackathon-techsprint",
  storageBucket: "hackathon-techsprint.firebasestorage.app",
  messagingSenderId: "1003588619714",
  appId: "1:1003588619714:web:423c77765038a8b67f5a5b",
  measurementId: "G-RS3ZD6PYZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
