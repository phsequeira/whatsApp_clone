import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGXPeUkl0P7mgWC9cg_6H-lPsKAA3iiTU",
    authDomain: "whatsappclone-3d131.firebaseapp.com",
    projectId: "whatsappclone-3d131",
    storageBucket: "whatsappclone-3d131.appspot.com",
    messagingSenderId: "294526900868",
    appId: "1:294526900868:web:7c57d880cd0181a93f80d1",
    measurementId: "G-TJQRN8XK18"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;