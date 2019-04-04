import React, { Component } from "react";
import Header from "./components/Header";
import ArtistsScreen from "./screens/ArtistsScreen";

import store from "./store";

/**
 * - Integrar `react-redux`
 * - Conectar componente `Header` para mostrar cantidad de favoritos
 * - Conectar component `ArtistBox` para que haga dispatch ante cada cambio
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
      <div style={{ width: "100%" }}>
        <Header title="Artistas" onSearchChange={this.handleSearchChange} />
        <ArtistsScreen filterText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
