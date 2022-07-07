import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBeVOxr4NAgWDLYiF2FVY2xvQb2wHL-4pk",
    authDomain: "evaluation-b5746.firebaseapp.com",
    projectId: "evaluation-b5746",
    storageBucket: "evaluation-b5746.appspot.com",
    messagingSenderId: "147488666674",
    appId: "1:147488666674:web:471b09cbe0334243aa382b",
    measurementId: "G-TVEX6S9ZSL"
};

export default firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()