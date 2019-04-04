import React, { Component } from "react";
import Header from "../../components/Header";
import ArtistsScreen from "../../components/ArtistsScreen";

/**
 * - Ante cada acción de favorite/unfavorite, incrementar/decrementar el contador
 * - Mostrar en el Header la cantidad de favoritos
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
