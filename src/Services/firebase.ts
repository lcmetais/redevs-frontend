// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDzzgvYKyrNadlc7j9J930djiSpqw1GWG4",
    authDomain: "redevs-c4c00.firebaseapp.com",
    projectId: "redevs-c4c00",
    storageBucket: "redevs-c4c00.appspot.com",
    messagingSenderId: "672906041995",
    appId: "1:672906041995:web:45ccf33bf9553da972928e",
    measurementId: "G-GTKZ45GHCH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);