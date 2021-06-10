import React, {useState, useEffect, useContext} from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Logo from "../images/2.png.proxy.js";
import Panier from "../images/basket-690778_1920.jpg.proxy.js";
import {FirebaseContext} from "./firebase/index.js";
import Footer from "./Footer.js";
const Login = (props) => {
  const firebase = useContext(FirebaseContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btn, setBtn] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (password.length > 5 && email !== "") {
      setBtn(true);
    } else if (btn) {
      setBtn(false);
    }
  }, [password, email]);
  const handleSubmit = async (e) => {
    console.log("inscriptionbutton");
    try {
      e.preventDefault();
      const user = await firebase.loginUser(email, password);
      setEmail("");
      setPassword("");
      props.history.push("/welcome");
    } catch (error2) {
      console.warn("error", error2);
      setError(error2);
      setEmail("");
      setPassword("");
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col md:flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Panier,
    alt: "panier",
    className: "w-full h-full object-cover"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12\n                flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full h-100"
  }, error !== "" && /* @__PURE__ */ React.createElement("div", {
    className: "bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4",
    role: "alert"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "ATTENTION"), /* @__PURE__ */ React.createElement("span", null, "Mauvais mot de passe")), /* @__PURE__ */ React.createElement("h1", {
    className: "text-xl md:text-2xl font-bold leading-tight -mt-14 my-4"
  }, "SE CONNECTER"), /* @__PURE__ */ React.createElement("form", {
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
    autoComplete: true,
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "block text-gray-700"
  }, "Mot de passe"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => setPassword(e.target.value),
    value: password,
    type: "password",
    name: "password",
    placeholder: "Mot de passe",
    minLength: "5",
    className: "w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-yellow-500\n                        focus:bg-white focus:outline-none",
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-right mt-2"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/ForgetPassword",
    className: "text-sm font-semibold text-gray-700 hover:text-yellow-400 focus:text-yellow-400"
  }, "Mot de passe oublié ?")), btn ? /* @__PURE__ */ React.createElement("button", {
    className: "w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg\n                      px-4 py-3 mt-6"
  }, "Connexion") : /* @__PURE__ */ React.createElement("button", {
    className: "cursor-not-allowed w-full block bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-400 text-white font-semibold rounded-lg\n                      px-4 py-3 mt-6",
    disabled: true
  }, "Connexion")), /* @__PURE__ */ React.createElement("hr", {
    className: "my-6 border-gray-300 w-full"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", {
    className: "mt-8"
  }, "Nouveau chez Agro-Click ? ", /* @__PURE__ */ React.createElement(Link, {
    className: "text-yellow-500 hover:text-yellow-400 font-semibold",
    to: "/signup"
  }, "Créez un compte.")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-20 h-20 pt-6",
    src: Logo,
    alt: "logo"
  }))))));
};
export default Login;
