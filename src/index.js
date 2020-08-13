import React from "react";
import ReactDOM from "react-dom";
import './styles/index.scss'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.js'

// Create element 
const sayHello = () => {
  return <App />;
};

ReactDOM.render(sayHello(), document.getElementById("root"));