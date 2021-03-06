import React, { Component } from "react";

import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    const { title, onSearchChange } = this.props;
    return (
      <div className="Header">
        <h1>{title}</h1>

        <SearchBar
          onSearch={onSearchChange}
          style={{ position: "absolute", top: 6, right: 30 }}
        />
      </div>
    );
  }
}

export default Header;
