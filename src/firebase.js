const firebase = require("firebase/app");
 require("firebase/auth");
 require("firebase/firestore");
 require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyBJyT1lcWI-2T5Ms4dHIPUOiFvT4TrbeXU",
    authDomain: "facebook-8cfa6.firebaseapp.com",
    databaseURL: "https://facebook-8cfa6.firebaseio.com",
    projectId: "facebook-8cfa6",
    storageBucket: "facebook-8cfa6.appspot.com",
    messagingSenderId: "893325213726",
    appId: "1:893325213726:web:8a626416c473c33175ee0f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {firebase, db, auth, storage}
