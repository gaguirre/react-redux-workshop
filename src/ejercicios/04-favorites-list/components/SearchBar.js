import React, { Component } from "react";

class SearchBar extends Component {
  handleInput = event => {
    this.props.onSearch(event.target.value);
  };

  render() {
    const { style } = this.props;
    return (
      <div className="SearchBar" style={style}>
        <img
          src="https://static.thenounproject.com/png/101791-200.png"
          alt="search"
        />
        <input onChange={this.handleInput} placeholder="Filter" />
      </div>
    );
  }
}

export default SearchBar;
