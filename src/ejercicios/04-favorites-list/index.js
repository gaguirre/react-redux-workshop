import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "../../components/Header";
// import ArtistsScreen from "../../components/ArtistsScreen";
// import Sidebar from "./components/Sidebar";

import store from "./store";

/**
 * - Cambiar la estructura del store de Redux a un objeto
 * - Guardar en ese objeto el`counter` y `favoriteArtists`
 * - Conectar `FavoritesScreen.js` para mostrar esos artistas
 */
class App extends Component {
  state = {
    searchText: ""
  };

  handleSearchChange = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <Router>
        {/* <Sidebar /> */}

        {/* <Route path="/" exact component={ArtistsScreen} />
        <Route path="/favorites" exact component={FavoritesScreen} /> */}
      </Router>
    );
  }
}

export default App;

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";

// import ArtistsScreen from "./screens/ArtistsScreen";
// import FavoritesScreen from "./screens/FavoritesScreen";
// import "./styles.css";

// import rootReducer from "./store/reducers";
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Sidebar />

//           <Route path="/" exact component={ArtistsScreen} />
//           <Route path="/favorites" exact component={FavoritesScreen} />
//         </div>
//       </Router>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
// );
