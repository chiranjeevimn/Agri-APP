// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBB1QGjRks_ke__wSi3gMo3IhgQJU2FOoM",
  authDomain: "agri-app-19533.firebaseapp.com",
  projectId: "agri-app-19533",
  storageBucket: "agri-app-19533.appspot.com",
  messagingSenderId: "646193545914",
  appId: "1:646193545914:web:cfebd22fcf79d748f3f883",
  measurementId: "G-02HQXTR8L9"
};

// Initialize Firebase

const analytics = getAnalytics(app);


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };