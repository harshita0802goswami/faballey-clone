import React from 'react';
import Topbar from './Topbar';
import Midbar from './Midbar';
import BottomBar from './BottomBar';
import { getAuth, onAuthStateChanged } from "firebase/auth";


// import AuthChecked from '../AuthCheck/AuthCheck';

const Navbar = () => {
  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  
      
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     const userName = auth.currentUser;
  //     if (userName !== null) {
  //       // The user object has basic properties such as display name, email, etc.
  //       const displayName = userName.displayName;
  //       const email = userName.email;
  //       const photoURL = userName.photoURL;
  //       const emailVerified = userName.emailVerified;
      
  //       // The user's ID, unique to the Firebase project. Do NOT use
  //       // this value to authenticate with your backend server, if
  //       // you have one. Use User.getToken() instead.
  //       const uid = userName.uid;
  //       console.log(displayName)
  //       console.log(email)
  //     }

  //     // ...
  //   } else {
  
  //     // User is signed out
  //     // ...
  //   }
  // });
  return (
    <div>
        <Topbar />
        <Midbar />
        <BottomBar />
    </div>
  )
}

export default Navbar