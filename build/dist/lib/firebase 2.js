import Firebase from '../../_snowpack/pkg/firebase/app.js';
import '../../_snowpack/pkg/firebase/firestore.js';
import '../../_snowpack/pkg/firebase/auth.js';


// import { seedDatabase } from '../seed';

const config= {
    apiKey: "AIzaSyAvn6CWbScAubmRG-rL6D1NCGtEkUMRvfs",
    authDomain: "agro-click-2f340.firebaseapp.com",
    projectId: "agro-click-2f340",
    storageBucket: "agro-click-2f340.appspot.com",
    messagingSenderId: "1051036786735",
    appId: "1:1051036786735:web:c050f7afa1c1721dbae6da"
};

const firebase = Firebase.initializeApp(config);

const {FieldValue} = Firebase.firestore;

console.log('firebase', firebase)
// seedDatabase(firebase);

export {firebase, FieldValue};