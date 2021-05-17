import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import FirebaseContext from "./ context/firebase";
import {firebase, FieldValue} from "./lib/firebase";
import Firebase, {FirebaseContext} from './Components/firebase';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase, FieldValue}}>
<BrowserRouter>
<FirebaseContext.Provider value={new Firebase()}>
  <App/>
  </FirebaseContext.Provider>
</BrowserRouter>      
</React.StrictMode>,
document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 // Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
//  if (import.meta.hot) {
//     import.meta.hot.accept();
//   }