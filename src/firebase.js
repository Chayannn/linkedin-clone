import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBdBWKPVku7Kzgk8LOiQmSMdvWgcHBf2I0',
  authDomain: 'linkedin-clone-354e6.firebaseapp.com',
  projectId: 'linkedin-clone-354e6',
  storageBucket: 'linkedin-clone-354e6.appspot.com',
  messagingSenderId: '1072906921269',
  appId: '1:1072906921269:web:37cb1c171820da2c13987c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
