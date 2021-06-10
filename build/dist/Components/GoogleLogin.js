import React, {Component, useState, useEffect, useContext} from "../../_snowpack/pkg/react.js";
import {FirebaseContext} from "./firebase/index.js";
class GoogleLogin extends Component() {
  onSubmit = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
    }).catch((error) => {
      console.log(error);
    });
  };
  render() {
    return /* @__PURE__ */ React.createElement("button", {
      type: "button",
      className: "w-full block bg-white hover:bg-yellow-400 focus:bg-yellow-400 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-yellow-500",
      onClick: this.onSubmit
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center justify-center"
    }, /* @__PURE__ */ React.createElement("span", {
      className: "ml-4"
    }, "Se connecter avec Google")));
  }
}
export default GoogleLogin;
