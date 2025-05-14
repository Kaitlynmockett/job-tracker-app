// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR_76BiCAeRMf3_jn5KqSR0rkQTex6s-g",
  authDomain: "job-tracker-app-979e3.firebaseapp.com",
  projectId: "job-tracker-app-979e3",
  storageBucket: "job-tracker-app-979e3.firebasestorage.app",
  messagingSenderId: "293378244822",
  appId: "1:293378244822:web:7186e43a0489b13ee74977",
  measurementId: "G-5ZBQQH1FB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };