import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  // apiKey: "AIzaSyAuv9XH4x3pGV-66BD2z1nZul8dCoTX9mU",
  // authDomain: "safaar-d5a9e.firebaseapp.com", 
  // projectId: "safaar-d5a9e",
  // storageBucket: "safaar-d5a9e.appspot.com",
  // messagingSenderId: "393644608460",
  // appId: "1:393644608460:web:0cd09c932a521226eaab69"
  apiKey: "AIzaSyA2akh1SJLcPr4vQb1cccB33WNPNsMbZGg",
  authDomain: "react-authentication-9ec6b.firebaseapp.com",
  projectId: "react-authentication-9ec6b",
  storageBucket: "react-authentication-9ec6b.appspot.com",
  messagingSenderId: "583951160039",
  appId: "1:583951160039:web:78fc9cafb49fbf30ec8842",
  measurementId: "G-QDYQEWP0LQ"
  };
  
  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage =firebase.storage();

  export {auth,fs,storage}