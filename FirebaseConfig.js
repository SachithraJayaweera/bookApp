// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import  "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwOfBLTtGkzZIXOs4S8bi1Eu3McY9eLLI",
  authDomain: "book-app-87cac.firebaseapp.com",
  databaseURL: "https://book-app-87cac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "book-app-87cac",
  storageBucket: "book-app-87cac.appspot.com",
  messagingSenderId: "1047950001138",
  appId: "1:1047950001138:web:96ee1885b506f9223ea16b"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};
// Initialize Firebase
