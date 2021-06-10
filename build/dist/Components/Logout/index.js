import React, {useState, useEffect, useContext} from "../../../_snowpack/pkg/react.js";
import {FirebaseContext} from "../firebase/index.js";
const Logout = () => {
  const firebase = useContext(FirebaseContext);
  const [checked, setChecked] = useState(false);
  console.log(checked);
  useEffect(() => {
    if (checked) {
      console.log("deconnexion");
      firebase.signoutUser();
    }
  }, [checked, firebase]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "logoutContainer"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "switch"
  }, /* @__PURE__ */ React.createElement("input", {
    onChange: handleChange,
    type: "checkbox",
    checked
  }), /* @__PURE__ */ React.createElement("span", {
    className: "slider round"
  })));
};
export default Logout;
