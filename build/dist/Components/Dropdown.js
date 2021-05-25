import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Logo from "../images/Agro-click.png.proxy.js";
const Dropdown = ({isOpen, toggle}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: isOpen ? "grid grid-rows-4 text-center items-center bg-yellow-500" : "hidden",
    onClick: toggle
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/"
  }, "Accueil"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/Login"
  }, "Se connecter"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/contact"
  }, "Contact"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/signup"
  }, "Sign up"));
};
export default Dropdown;
