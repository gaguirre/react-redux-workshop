import React, { Component } from "react";
import Header from "../../components/Header";
import ArtistsScreen from "../../components/ArtistsScreen";

/**
 * - Agregar un método para manejar el "search input"
 * - En cada cambio, filtrar los artistas en base a ese input
 * - Mostrar en pantalla los artistas filtrados
 */
class App extends Component {
  state = {
    artists: [],
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
