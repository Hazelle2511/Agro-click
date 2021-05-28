import React, {useState, useContext} from "../../../_snowpack/pkg/react.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import {FirebaseContext} from "../firebase/index.js";
const ForgetPassword = (props) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.passwordReset(email).then(() => {
      setError(null);
      setSuccess(`Consultez votre email ${email} pour changer le mot de passe`);
      setEmail("");
      setTimeout(() => {
        props.history.push("/login");
      }, 5e3);
    }).catch((error2) => {
      setError(error2);
      setEmail("");
    });
  };
  const disabled = email === "";
  console.log(email);
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col md:flex-row h-screen items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12\n              flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-100"
  }, success && /* @__PURE__ */ React.createElement("span", {
    className: ""
  }, success), error && /* @__PURE__ */ React.createElement("span", {
    className: ""
  }, error.message), /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl md:text-2xl font-bold leading-tight -mt-8"
  }, "MOT DE PASSE OUBLIÉ"), /* @__PURE__ */ React.createElement("form", {
    onSubmit: handleSubmit,
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700"
  }, "E-mail"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => setEmail(e.target.value),
    value: email,
    type: "email",
    name: "email",
    placeholder: "E-mail",
    className: "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500 focus:bg-white focus:outline-none",
    autoFocus: true,
    autoComplete: "true",
    required: true
  })), /* @__PURE__ */ React.createElement("button", {
    disabled,
    className: "w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg\n                    px-4 py-3 mt-6"
  }, "Récupérer")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8"
  }, "Nouveau chez Agro-Click ? ", /* @__PURE__ */ React.createElement(Link, {
    className: "text-yellow-500 hover:text-yellow-400 font-semibold",
    to: "/signup"
  }, "Créez un compte.")))));
};
export default ForgetPassword;
