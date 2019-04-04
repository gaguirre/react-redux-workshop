import React, { Component } from "react";
import ReactDOM from "react-dom";

import store from "./store";

import "./styles.css";
import Ejercicio1 from "./ejercicios/01-redux-integration";
import Ejercicio2 from "./ejercicios/02-favorites-count";
import Ejercicio3 from "./ejercicios/03-react-redux";
import Ejercicio4 from "./ejercicios/04-favorites-list";
import Ejercicio5 from "./ejercicios/05-combine-reducers";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Ejercicio3 />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
