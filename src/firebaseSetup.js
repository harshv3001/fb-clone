import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_NZY4jdd75Fh_jXpQMgNrnGGx_Kx3N-Q",
  authDomain: "facebook-clo-ne.firebaseapp.com",
  projectId: "facebook-clo-ne",
  storageBucket: "facebook-clo-ne.appspot.com",
  messagingSenderId: "729828225097",
  appId: "1:729828225097:web:bacfcb2195de3870ba4f98",
  measurementId: "G-WW6DYZP277",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const authentication = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { authentication, provider };
export default db;
