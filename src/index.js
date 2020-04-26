import React from "react";
import ReactDOM from "react-dom";
import './styles/index.scss'

// Create element 
const sayHello = () => {
  return <h1>Hello React!</h1>;
};

ReactDOM.render(sayHello(), document.getElementById("root"));