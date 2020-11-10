//Configuración para Firebase
import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsPFO-wcjIZFvJKizsum0injFOVeVN2LQ",
    authDomain: "vue-firebase-31c92.firebaseapp.com",
    databaseURL: "https://vue-firebase-31c92.firebaseio.com",
    projectId: "vue-firebase-31c92",
    storageBucket: "vue-firebase-31c92.appspot.com",
    messagingSenderId: "315718808183",
    appId: "1:315718808183:web:8aedcb4f1bed01451fcc72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
