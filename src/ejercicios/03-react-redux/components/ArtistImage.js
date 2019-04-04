import React, { Component } from "react";

const favImageUrl =
  "https://www.searchpng.com/wp-content/uploads/2019/02/favorite-icon-PNG.png";

class ArtistImage extends Component {
  render() {
    const { source, name, favorited } = this.props;
    return (
      <div className="ArtistImage">
        <img src={source} alt={name} className="ArtistImage-image" />
        {favorited && (
          <img
            src={favImageUrl}
            alt="This artist is a favorite"
            className="ArtistImage-fav"
          />
        )}
      </div>
    );
  }
}

export default ArtistImage;
