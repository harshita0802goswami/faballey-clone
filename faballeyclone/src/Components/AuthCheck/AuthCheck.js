import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthChecked = ()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {

    
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log('user');
    console.log(user);

    // ...
  } else {

    // User is signed out
    // ...
    // navigate to login
  }
});
}

export default AuthChecked;
