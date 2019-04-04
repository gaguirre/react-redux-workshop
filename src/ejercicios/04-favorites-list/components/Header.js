import React, { Component } from "react";

import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    const { title, onSearchChange } = this.props;
    const favoritesCount = 5;

    return (
      <div className="Header">
        <h1>{title}</h1>
        <h5>Cantidad de favs: {favoritesCount}</h5>

        <SearchBar
          onSearch={onSearchChange}
          style={{ position: "absolute", top: 6, right: 30 }}
        />
      </div>
    );
  }
}

export default Header;
