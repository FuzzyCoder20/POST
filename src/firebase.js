import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBZlWGYzq46cAy_oGaR_oHY47LwpuCU-3s",
  authDomain: "post-v2.firebaseapp.com",
  projectId: "post-v2",
  storageBucket: "post-v2.appspot.com",
  messagingSenderId: "303831762099",
  appId: "1:303831762099:web:22722e1fcf714289f4dcc6"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, storage, auth, provider }


  
    