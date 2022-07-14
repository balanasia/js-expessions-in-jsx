import React from "react";
import ReactDOM from "react-dom";

const fname = "Anastasiia";
const lname = "Balakhan";
const luckyNumber = 3;

ReactDOM.render(
  <div>
    {/* js6 templating */}
    <h1>Hello {`${fname} ${lname}`}</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
