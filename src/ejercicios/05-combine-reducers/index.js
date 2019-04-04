import React, { Component } from "react";
import store from "./store";

/**
 * - Agregar `redux` como dependencia
 * - Dentro del archivo `store.js`
 *    - Crear y devolver un store que tenga un contador (basado en el ejemplo de la doc)
 */

class App extends Component {
  state = { counter: store.getState() };

  componentDidMount() {
    store.subscribe(() => {
      // console.warn("aaa", store.getState());

      this.setState({
        counter: store.getState()
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <button onClick={() => store.dispatch({ type: "INCREMENT" })} />
      </div>
    );
  }
}

export default App;
