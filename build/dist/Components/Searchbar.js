import {Result} from "../../_snowpack/pkg/postcss.js";
import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
function Searchbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white flex items-center rounded-full shadow-sm"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "rounded-l-full w-full py-1 px-1 text-gray-700 leading-tight focus:outline-none ",
    id: "search",
    type: "text",
    placeholder: "Rechercher"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "p-2",
    name: "result"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "result",
    className: "bg-yellow-500 text-white rounded-full p-1 hover:bg-yellow-400 focus:outline-none w-6 h-6 flex items-center justify-center"
  }))));
}
export default Searchbar;
