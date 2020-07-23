import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBnQQ7XJdz1Uq0XHShiicFAoyVBF0srC0c",
    authDomain: "clone-react-amazom-969fe.firebaseapp.com",
    databaseURL: "https://clone-react-amazom-969fe.firebaseio.com",
    projectId: "clone-react-amazom-969fe",
    storageBucket: "clone-react-amazom-969fe.appspot.com",
    messagingSenderId: "949626908079",
    appId: "1:949626908079:web:6d4b19e2f78c42ae8ad35a",
    measurementId: "G-P529TQGWK9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };