// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB67YrFpfZlkiH3JkwF-MgoLZt7XFOnQ8I",
    authDomain: "faballey-clone.firebaseapp.com",
    projectId: "faballey-clone",
    storageBucket: "faballey-clone.appspot.com",
    messagingSenderId: "147900609060",
    appId: "1:147900609060:web:70d291735b74e730fe1eb1",
    measurementId: "G-M8361XTTH2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const webAuth = getAuth(app);