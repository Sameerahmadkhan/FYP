import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAuv9XH4x3pGV-66BD2z1nZul8dCoTX9mU",
  authDomain: "safaar-d5a9e.firebaseapp.com", 
  projectId: "safaar-d5a9e",
  storageBucket: "safaar-d5a9e.appspot.com",
  messagingSenderId: "393644608460",
  appId: "1:393644608460:web:0cd09c932a521226eaab69"
  };
  
  firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage =firebase.storage();

  export {auth,fs,storage}