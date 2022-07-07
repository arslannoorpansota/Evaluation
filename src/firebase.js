import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBeVOxr4NAgWDLYiF2FVY2xvQb2wHL-4pk",
    authDomain: "evaluation-b5746.firebaseapp.com",
    projectId: "evaluation-b5746",
    storageBucket: "evaluation-b5746.appspot.com",
    messagingSenderId: "147488666674",
    appId: "1:147488666674:web:471b09cbe0334243aa382b",
    measurementId: "G-TVEX6S9ZSL"
  };

const getAppInstance = () => {


    if (firebase.apps.length) {
        return firebase.apps[0];
    } else {
        return firebase.initializeApp(firebaseConfig);
    }
}

export const adminClient = getAppInstance();