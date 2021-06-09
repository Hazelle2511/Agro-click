import React, {Component} from "../../_snowpack/pkg/react.js";
import Firebase from "./firebase/firebase.js";
import {auth, db, getDocs, collection} from "./firebase/firebase.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
class Agriculteur extends Component {
  constructor() {
    super();
    this.state = {
      Agriculteurs: null
    };
  }
  async componentDidMount() {
    console.log("mounted");
    console.log("Db", db);
    await db.collection("Agriculteurs").get().then((snapshot) => {
      console.log("Snapshot", snapshot);
      const Agriculteurs = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log("Data", data);
        Agriculteurs.push(data);
      });
      this.setState({Agriculteurs: snapshot.forEach((doc) => doc.data())});
      this.setState({Agriculteurs});
    }).catch((error) => console.log("Error", error));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      className: "tracking-widest uppercase mb-8 mt-8 text-5xl text-yellow-500"
    }, "La sélection des producteurs"), this.state.Agriculteurs && this.state.Agriculteurs.map((Agriculteurs) => {
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
        className: "container my-12 mx-auto px-4 md:px-12 xl: mb-72"
      }, /* @__PURE__ */ React.createElement("div", {
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
      }, /* @__PURE__ */ React.createElement("h2", null, Agriculteurs.Name))), /* @__PURE__ */ React.createElement("p", {
        className: "text-grey-darker text-sm"
      }, /* @__PURE__ */ React.createElement("h2", null, Agriculteurs.ville))))))));
    }));
  }
}
export default Agriculteur;
