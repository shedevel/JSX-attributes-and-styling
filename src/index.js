import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Red Bell Pepper</li>
      <li>Peaches</li>
      <li>Cream Cakes</li>
    </ul>
  </div>,
  document.getElementById("root")
);
