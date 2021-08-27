import React from "react";
import ReactDOM from "react-dom";
import Page1 from "./Page1";

const App = () => (
  <div>
    <Page1 />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
