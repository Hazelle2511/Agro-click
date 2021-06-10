import React, {Component} from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import videoo from "../images/pexels-zen-chung-5527769.mp4.proxy.js";
import agri from "../images/soil-386749_1920.jpg.proxy.js";
import Footer from "./Footer.js";
import GoogleMap from "./GoogleMap.js";
import Agriculteur from "./Agriculteur.js";
class Accueil extends Component {
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      className: "overflow-hidden"
    }, /* @__PURE__ */ React.createElement("header", {
      className: "relative flex items-center justify-center h-screen w-screen overflow-hidden sm:h-auto sm:w-auto"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative z-20 p-5 lg:text-7xl md:text-5xl sm:text-5xl sm:mt-28 text-2xl font-block mb-14 flex flex-col justify-center items-center mb-14 text-center "
    }, "Le goût et la qualité des producteurs directement chez vous", /* @__PURE__ */ React.createElement(Link, {
      to: "/Login",
      className: "py-6 px-10 bg-yellow-500 rounded-full\n        text-3xl hover:bg-green-800 transition duration-300 ease-in-out flex items-center animate-bounce mt-10 text-white sm: mt-28"
    }, "Commander", /* @__PURE__ */ React.createElement("svg", {
      className: "w-6 h-6 ml-4",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2,
      d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    })))), /* @__PURE__ */ React.createElement("video", {
      width: "100%",
      height: "100%",
      autoPlay: true,
      loop: true,
      className: "absolute z-10 min-w-full  min-h-full  max-w-none opacity-80 hidden md:block "
    }, /* @__PURE__ */ React.createElement("source", {
      src: videoo,
      alt: "video",
      type: "video/mp4"
    }))), /* @__PURE__ */ React.createElement("main", {
      className: "xl: mb-72 sm: mb-12"
    }, /* @__PURE__ */ React.createElement("div", {
      className: ""
    }, /* @__PURE__ */ React.createElement("div", {
      className: "max-w-6xl mx-auto px-8 py-16"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative lg:flex rounded-lg shadow-2xl overflow-hidden"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center "
    }, /* @__PURE__ */ React.createElement("img", {
      className: "absolute h-full w-full object-cover",
      src: agri,
      alt: ""
    })), /* @__PURE__ */ React.createElement("div", {
      className: "relative lg:w-7/12 bg-white"
    }, /* @__PURE__ */ React.createElement("svg", {
      className: "absolute h-full text-white w-24 -ml-12",
      fill: "currentColor",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, /* @__PURE__ */ React.createElement("polygon", {
      points: "50,0 100,0 50,100 0,100"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed"
    }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", {
      className: "text-gray-900 font-medium"
    }, "AGRO CLICK"), " séléctionne les meilleurs producteurs de la région. Nous garantissons des produits de qualité, livrés directement à domicile. Avec AGRO CLICK, choisissez le producteur le plus proche de chez vous, sélectionnez les produits qui vous font envies et faite vous livrer directement chez vous.  —"), /* @__PURE__ */ React.createElement("p", {
      className: "mt-6"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/",
      className: "font-medium text-yellow-500 hover:text-yellow-400"
    }, "Pour en savoir plus →"))))))))), /* @__PURE__ */ React.createElement(Agriculteur, null), /* @__PURE__ */ React.createElement(GoogleMap, null));
  }
}
export default Accueil;
