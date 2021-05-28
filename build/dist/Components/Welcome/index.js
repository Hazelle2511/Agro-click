import React, {useState, Fragment, useContext, useEffect} from "../../../_snowpack/pkg/react.js";
import {FirebaseContext} from "../firebase/index.js";
import Logout from "../Logout/index.js";
import AccessProfil from "./index.js";
const Welcome = (props) => {
  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push("/");
    });
    return () => {
      listener();
    };
  }, []);
  return userSession === null ? /* @__PURE__ */ React.createElement(Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "loader"
  }), /* @__PURE__ */ React.createElement("p", null, "Patienter..")) : /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Logout, null), /* @__PURE__ */ React.createElement(AccessProfil, null)));
};
export default Welcome;
