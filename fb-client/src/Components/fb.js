

// import { initializeApp } from 'firebase/app';
// import { FacebookAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore"
// import { getAuth } from "firebase/auth";
// import { getStorage, ref } from "firebase/storage";
import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDr3J3cr3Epg-g4eHXkbGcCzY4z5Ky3czk",
  authDomain: "fb-clone-6c324.firebaseapp.com",
  projectId: "fb-clone-6c324",
  storageBucket: "fb-clone-6c324.appspot.com",
  messagingSenderId: "86803208998",
  appId: "1:86803208998:web:548816be6efbce1f5d3fe7"
});

const auth = firebase.auth();
const provider = new firebase.auth.FacebookAuthProvider();
const db = firebaseConfig.firestore();
const storage = firebase.storage();



// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const provider = new FacebookAuthProvider();
// const db = getFirestore(app);
// const storage = getStorage(app);

export {auth ,provider ,db,storage}





