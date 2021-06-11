import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/analytics";
import 'firebase/storage';




// firebase config // 

// export const provider = new firebase.auth.GoogleAuthProvider();


// const Config = {
//     apiKey: "AIzaSyDTU5LpzQB0S8pWWaNBg7RVssLXEiF1kxU",
//     authDomain: "projet-cyb-signup.firebaseapp.com",
//     projectId: "projet-cyb-signup",
//     storageBucket: "projet-cyb-signup.appspot.com",
//     messagingSenderId: "212315726896",
//     appId: "1:212315726896:web:a325936465a1e9e1d6b9f5"
//   };

 const Config = {
    apiKey: "AIzaSyA24cR3PpWjqRO8O-teOdmG-_G28umVInM",
    authDomain: "agro-click-7a346.firebaseapp.com",
    databaseURL: "https://agro-click-7a346-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "agro-click-7a346",
    storageBucket: "agro-click-7a346.appspot.com",
    messagingSenderId: "413825840890",
    appId: "1:413825840890:web:021fbff28b2c8af1493b43"

};




export default class Firebase {
    constructor(){

        // if (!app.apps.length) {
           
        //     app.initializeApp({});
            
        //  }else {
        //     app.app(); // if already initialized, use that one
        //  }
        // app.initializeApp(Config);
        this.auth = app.auth();
        
    
        //  var provider = new app.auth.GoogleAuthProvider()
        //  this.google = new app.auth.GoogleAuthProvider()
        //  const provider = new GoogleAuthProvider();

    // // //    //For agriculteurs
     this.db = app.firestore();
    }



    // methode d'inscription

    signupUser = (email, password) => this.auth.createUserWithEmailAndPassword(email,password);
    


    // methode connexion

    loginUser = (email, password) => this.auth.signInWithEmailAndPassword(email,password);
    
   
  


    // deconnexion methode

    signoutUser = () => this.auth.signOut();



    //Récupérer le mdp

passwordReset = email => this.auth.sendPasswordResetEmail(email);



//connexion gmail

// signInWithPopup = () => this.auth.GoogleAuthProvider();

};


//   export const config =  app.initializeApp(Config);
   app.initializeApp(Config);

export const storage = app.storage();
export const auth = app.auth();
export const db = app.firestore();
export const {collection, getDocs, getStorage, ref, getDownloadUrl} = app.firestore();



// 

