import React, {Component, useState, useEffect, useContext} from "react";

// import Firebase from "./firebase/firebase"
import {FirebaseContext} from '../Components/firebase';





class GoogleLogin extends Component() {
    

    
   onSubmit = () => {

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
  })
  .catch((error) => {
      console.log(error);
   
    
  });
   }

  render() {
      return(

        <button type="button" className="w-full block bg-white hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-yellow-500"
        onClick={this.onSubmit}>
                    <div className="flex items-center justify-center">
                    <span className="ml-4">
                    Se connecter avec Google
                    </span>
                    </div>
                  </button>
      )
  }
    
}



// const GoogleLogin = () => {

  
//     const firebase = useContext(FirebaseContext);
   
//     const [isSignedIn, setSignedIn] = useState(false);


//     const uiConfig = {
//         signInFlow: "popup",
//         signInOptions: [
//             firebase.auth.GoogleAuthProvider.PROVIDER_ID
//         ],

//         callbacks: {
//             signInSuccess: () => false,
//         }
//     }

//     useEffect(()=> {
//         firebase.auth().onAuthStateChanged((user) => {
//             setSignedIn(!!user);
//             console.log(user)
//         })

//     }, [])

//     return(

//                 <button type="button" className="w-full block bg-white hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-yellow-500"
//         onClick={this.onSubmit}>
//                     <div className="flex items-center justify-center">
//                     <span className="ml-4">
//                     Se connecter avec Google
//                     </span>
//                     </div>
//                   </button>

//     )
// }


export default GoogleLogin;