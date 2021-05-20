import React, {Component} from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import videoo from "../images/pexels-zen-chung-5527769.mp4.proxy.js";
import agri from "../images/soil-386749_1920.jpg.proxy.js";
import GoogleMap from "./GoogleMap.js";
import Footer from "./Footer.js";
class Accueil extends Component {
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
      className: "relative flex items-center justify-center h-screen overflow-hidden"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative z-30 p-5 lg:text-7xl md:text-5xl sm:text-3xl text-2xl font-block mb-14 flex flex-col justify-center items-center mb-14 text-center"
    }, "Le goût et la qualité des producteurs à porté de click !", /* @__PURE__ */ React.createElement(Link, {
      to: "/",
      className: "py-6 px-10 bg-yellow-500 rounded-full\n        text-3xl hover:bg-green-400 transition duration-300 ease-in-out flex items-center animate-bounce mt-10"
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
      className: "absolute z-10    min-w-full min-h-full max-w-none opacity-80 "
    }, /* @__PURE__ */ React.createElement("source", {
      src: videoo,
      alt: "video",
      type: "video/mp4"
    }))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
      className: "bg-green-600"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "max-w-6xl mx-auto px-8 py-16"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "relative lg:flex rounded-lg shadow-2xl overflow-hidden"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center"
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
    }, "Agro-click"), " séléctionne les meilleurs producteurs de la région. Nous garantissons des produits de qualité blablablablabla. Avec Agro-click, choisissez le producteur le plus prêt de chez vous, sélectionnez les produits qui vous font envies et faite vous livrer directement chez vous.  —"), /* @__PURE__ */ React.createElement("p", {
      className: "mt-6"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/",
      className: "font-medium text-yellow-500 hover:text-yellow-400"
    }, "Pour en savoir plus →"))))), /* @__PURE__ */ React.createElement("div", {
      className: "absolute inset-y-0 left-0 lg:flex lg:items-center"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
    }, /* @__PURE__ */ React.createElement("svg", {
      className: "h-full w-full text-yellow-500",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
    })))), /* @__PURE__ */ React.createElement("div", {
      className: "absolute inset-y-0 right-0 lg:flex lg:items-center"
    }, /* @__PURE__ */ React.createElement("button", {
      className: "mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg"
    }, /* @__PURE__ */ React.createElement("svg", {
      className: "h-full w-full text-yellow-500",
      fill: "currentColor",
      viewBox: "0 0 24 24"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
    })))))))), /* @__PURE__ */ React.createElement("div", {
      className: "container my-12 mx-auto px-4 md:px-12"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500"
    }, "La sélection des producteurs"), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-wrap -mx-1 lg:-mx-4"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
    }, /* @__PURE__ */ React.createElement("article", {
      className: "overflow-hidden rounded-lg shadow-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block h-auto w-full",
      src: "https://picsum.photos/600/400/?random"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center justify-between leading-tight p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-lg"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "no-underline hover:underline text-black",
      href: "#"
    }, "Provence-Alpes-Côte d’Azur")), /* @__PURE__ */ React.createElement("p", {
      className: "text-grey-darker text-sm"
    }, "Avignon")), /* @__PURE__ */ React.createElement("div", {
      className: "flex items-center justify-between leading-none p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/",
      className: "flex items-center no-underline hover:underline text-black",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block rounded-full",
      src: "https://picsum.photos/32/32/?random"
    }), /* @__PURE__ */ React.createElement("p", {
      className: "ml-2 text-sm"
    }, "Le fermier du sud"))))), /* @__PURE__ */ React.createElement("div", {
      className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
    }, /* @__PURE__ */ React.createElement("article", {
      className: "overflow-hidden rounded-lg shadow-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block h-auto w-full",
      src: "https://picsum.photos/600/400/?random"
    })), /* @__PURE__ */ React.createElement("header", {
      className: "flex items-center justify-between leading-tight p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "no-underline hover:underline text-black",
      href: "#"
    }, "Alsace")), /* @__PURE__ */ React.createElement("p", {
      className: "text-grey-darker text-sm"
    }, "Strasbourg")), /* @__PURE__ */ React.createElement("footer", {
      className: "flex items-center justify-between leading-none p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement(Link, {
      className: "flex items-center no-underline hover:underline text-black",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block rounded-full",
      src: "https://picsum.photos/32/32/?random"
    }), /* @__PURE__ */ React.createElement("p", {
      className: "ml-2 text-sm"
    }, "Le clos"))))), /* @__PURE__ */ React.createElement("div", {
      className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
    }, /* @__PURE__ */ React.createElement("article", {
      className: "overflow-hidden rounded-lg shadow-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block h-auto w-full",
      src: "https://picsum.photos/600/400/?random"
    })), /* @__PURE__ */ React.createElement("header", {
      className: "flex items-center justify-between leading-tight p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "no-underline hover:underline text-black",
      href: "#"
    }, "Auvergne")), /* @__PURE__ */ React.createElement("p", {
      className: "text-grey-darker text-sm"
    }, "Le-Puy-en-Vellais")), /* @__PURE__ */ React.createElement("footer", {
      className: "flex items-center justify-between leading-none p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "flex items-center no-underline hover:underline text-black",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block rounded-full",
      src: "https://picsum.photos/32/32/?random"
    }), /* @__PURE__ */ React.createElement("p", {
      className: "ml-2 text-sm"
    }, "Richard Gers"))))), /* @__PURE__ */ React.createElement("div", {
      className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
    }, /* @__PURE__ */ React.createElement("article", {
      className: "overflow-hidden rounded-lg shadow-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block h-auto w-full",
      src: "https://picsum.photos/600/400/?random"
    })), /* @__PURE__ */ React.createElement("header", {
      className: "flex items-center justify-between leading-tight p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "no-underline hover:underline text-black",
      href: "#"
    }, "Ile-de-france")), /* @__PURE__ */ React.createElement("p", {
      className: "text-grey-darker text-sm"
    }, "Bezons")), /* @__PURE__ */ React.createElement("footer", {
      className: "flex items-center justify-between leading-none p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "flex items-center no-underline hover:underline text-black",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block rounded-full",
      src: "https://picsum.photos/32/32/?random"
    }), /* @__PURE__ */ React.createElement("p", {
      className: "ml-2 text-sm"
    }, "Le poulailler"))))), /* @__PURE__ */ React.createElement("div", {
      className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
    }, /* @__PURE__ */ React.createElement("article", {
      className: "overflow-hidden rounded-lg shadow-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block h-auto w-full",
      src: "https://picsum.photos/600/400/?random"
    })), /* @__PURE__ */ React.createElement("header", {
      className: "flex items-center justify-between leading-tight p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "no-underline hover:underline text-black",
      href: "#"
    }, "Haute Normandie")), /* @__PURE__ */ React.createElement("p", {
      className: "text-grey-darker text-sm"
    }, "Louviers")), /* @__PURE__ */ React.createElement("footer", {
      className: "flex items-center justify-between leading-none p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "flex items-center no-underline hover:underline text-black",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block rounded-full",
      src: "https://picsum.photos/32/32/?random"
    }), /* @__PURE__ */ React.createElement("p", {
      className: "ml-2 text-sm"
    }, "Riset du chemin"))))), /* @__PURE__ */ React.createElement("div", {
      className: "my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
    }, /* @__PURE__ */ React.createElement("article", {
      className: "overflow-hidden rounded-lg shadow-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      class: "block h-auto w-full",
      src: "https://picsum.photos/600/400/?random"
    })), /* @__PURE__ */ React.createElement("header", {
      className: "flex items-center justify-between leading-tight p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement("h1", {
      className: "text-lg"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "no-underline hover:underline text-black",
      href: "#"
    }, "Franche Comté")), /* @__PURE__ */ React.createElement("p", {
      className: "text-grey-darker text-sm"
    }, "Sainte-Claude")), /* @__PURE__ */ React.createElement("footer", {
      className: "flex items-center justify-between leading-none p-2 md:p-4"
    }, /* @__PURE__ */ React.createElement(Link, {
      to: "/href",
      className: "flex items-center no-underline hover:underline text-black",
      href: "#"
    }, /* @__PURE__ */ React.createElement("img", {
      alt: "Placeholder",
      className: "block rounded-full",
      src: "https://picsum.photos/32/32/?random"
    }), /* @__PURE__ */ React.createElement("p", {
      className: "ml-2 text-sm"
    }, "Lieu dit du chateau"))))))), /* @__PURE__ */ React.createElement(GoogleMap, null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Footer, null)));
  }
}
export default Accueil;
