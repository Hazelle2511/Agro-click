import React, {Component, useState, useContext} from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Logo from "../images/Agro-click.png.proxy.js";
import Contactbg from "../images/mill.gif.proxy.js";
import {FirebaseContext} from "../Components/firebase/index.js";
const Signup = (props) => {
  const firebase = useContext(FirebaseContext);
  console.log(firebase);
  const data = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    cPassword: ""
  };
  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email: email2, password: password2} = loginData;
    firebase.signupUser(email2, password2).then((user) => {
      setLoginData({...data});
      props.history.push("/");
    }).catch((error2) => {
      setError(error2);
      setLoginData({...data});
    });
  };
  const {fName, lName, email, password, cPassword} = loginData;
  const btn = fName == "" || lName == "" || email == "" || password == "" || password !== cPassword ? /* @__PURE__ */ React.createElement("button", {
    className: "block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 text-white rounded-lg px-3 py-3 font-semibold cursor-not-allowed",
    disabled: true
  }, "Inscription") : /* @__PURE__ */ React.createElement("button", {
    className: "block w-full max-w-xs mx-auto bg-yellow-500 hover:bg-yellow-700 focus:bg-yellow-700 text-white rounded-lg px-3 py-3 font-semibold"
  }, "Inscription");
  const errorMsg = error !== "" && /* @__PURE__ */ React.createElement("span", null, error.message);
  return /* @__PURE__ */ React.createElement("div", {
    className: "min-w-screen min-h-screen bg-gray-200   flex items-center justify-center px-5 py-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden",
    style: {maxWidth: "1000px"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:flex w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:block w-1/2  py-10 px-10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Contactbg,
    alt: "windmil",
    className: "w-full h-full object-cover"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-full md:w-1/2 py-10 px-5 md:px-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center mb-10"
  }, errorMsg, /* @__PURE__ */ React.createElement("h1", {
    className: "font-bold text-3xl text-gray-900"
  }, "INSCRIPTION"), /* @__PURE__ */ React.createElement("p", null, "Entrez vos informations pour vous enregistrer")), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex -mx-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-3 mb-5"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "",
    className: "text-xs font-semibold px-1"
  }, "Prénom"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdi mdi-account-outline text-gray-400 text-lg"
  })), /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    value: fName,
    name: "fName",
    type: "text",
    required: true,
    className: "w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",
    placeholder: "Jane"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex -mx-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-3 mb-5"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "",
    className: "text-xs font-semibold px-1"
  }, "Nom de famille"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdi mdi-account-outline text-gray-400 text-lg"
  })), /* @__PURE__ */ React.createElement("input", {
    required: true,
    name: "lName",
    value: lName,
    onChange: handleChange,
    type: "text",
    className: "w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",
    placeholder: "Doe"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex -mx-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-3 mb-5"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "",
    className: "text-xs font-semibold px-1"
  }, "Email"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdi mdi-email-outline text-gray-400 text-lg"
  })), /* @__PURE__ */ React.createElement("input", {
    required: true,
    name: "email",
    value: email,
    onChange: handleChange,
    type: "email",
    className: "w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",
    placeholder: "janedoe@example.com"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex -mx-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-3 mb-5"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "",
    className: "text-xs font-semibold px-1"
  }, "Mot de passe"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdi mdi-lock-outline text-gray-400 text-lg"
  })), /* @__PURE__ */ React.createElement("input", {
    required: true,
    name: "password",
    value: password,
    onChange: handleChange,
    type: "password",
    className: "w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",
    placeholder: "*****"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex -mx-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-3 mb-5"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "",
    className: "text-xs font-semibold px-1"
  }, "Confirmation du mot de passe"), /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("i", {
    className: "mdi mdi-lock-outline text-gray-400 text-lg"
  })), /* @__PURE__ */ React.createElement("input", {
    required: true,
    name: "cPassword",
    value: cPassword,
    onChange: handleChange,
    type: "password",
    className: "w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500",
    placeholder: "*****"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex -mx-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-3 mb-5"
  }, btn))), /* @__PURE__ */ React.createElement("div", {
    className: "linkContainer"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "simpleLink",
    to: "/Login"
  }, " Déjà inscrit ? Connectez vous."))))));
};
export default Signup;
