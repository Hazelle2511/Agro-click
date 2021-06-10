import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import Logo from "../images/Agro-click.png.proxy.js";
const Dropdown = ({isOpen, toggle}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: isOpen ? "grid grid-rows-4 text-center items-center h-screen w-screen -mt-16 text-2xl bg-yellow-500  block  sticky top-0 animated z-40  flex-1 overflow-y-scroll" : "hidden",
    onClick: toggle
  }, /* @__PURE__ */ React.createElement(Link, {
    className: "mt-20 p-4 block font-semiblod hover:bg-gray-200",
    to: "/"
  }, "Accueil"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 block font-semiblod hover:bg-gray-200 ",
    to: "/Login"
  }, "Se connecter"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 block font-semiblod hover:bg-gray-200",
    to: "/contact"
  }, "Contact"), /* @__PURE__ */ React.createElement(Link, {
    className: "p-4 block font-semiblod hover:bg-gray-200",
    to: "/signup"
  }, "Sign up"));
};
export default Dropdown;
