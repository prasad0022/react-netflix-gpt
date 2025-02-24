// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAETcG6GD71uvPmgEkTiphdVQBc6wtJqB8",
    authDomain: "netflixgpt-a4f84.firebaseapp.com",
    projectId: "netflixgpt-a4f84",
    storageBucket: "netflixgpt-a4f84.firebasestorage.app",
    messagingSenderId: "401757553540",
    appId: "1:401757553540:web:534d7b24286eb136c213d1",
    measurementId: "G-CFC13Q4TSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);