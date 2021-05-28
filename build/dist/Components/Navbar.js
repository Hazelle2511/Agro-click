import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Logo from "../images/Agro-click.png.proxy.js";
import Searchbar from "./Searchbar.js";
function Navbar({toggle}) {
  return /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono sticky top-0 z-50"
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: Logo,
    alt: "carrot",
    className: "h-16"
  })), /* @__PURE__ */ React.createElement(Searchbar, null), /* @__PURE__ */ React.createElement("div", {
    className: " md:block hidden"
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/"
  }, "Accueil"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/signup"
  }, "Inscription"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/Login"
  }, "Connexion"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/contact"
  }, "Contact"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4",
    to: "/ShoppingCard"
  }, /* @__PURE__ */ React.createElement("button", {
    className: ""
  }, /* @__PURE__ */ React.createElement("svg", {
    className: " w-8 h-8 text-green-700  rounded-full p-1 hover:bg-yellow-400 ",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
  }), " ")))));
}
export default Navbar;
