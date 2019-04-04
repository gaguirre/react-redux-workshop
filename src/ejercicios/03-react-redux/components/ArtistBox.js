import React, { Component } from "react";

import ArtistImage from "./ArtistImage";
import TextWithIcon from "./TextWithIcon";

const followersIconUrl =
  "https://image.flaticon.com/icons/png/512/747/747835.png";

class ArtistBox extends Component {
  state = {
    favorited: false
  };

  toggleFavorite = () => {
    this.setState(prevState => ({ favorited: !prevState.favorited }));
  };

  render() {
    const { imageUrl, name, followersCount } = this.props.artist;
    const { favorited } = this.state;

    return (
      <div className="ArtistBox">
        <ArtistImage source={imageUrl} favorited={favorited} />
        <h3>{name}</h3>
        <TextWithIcon
          text={`${followersCount} followers`}
          iconUrl={followersIconUrl}
          style={{ marginBottom: 25 }}
        />
        <button onClick={this.toggleFavorite}>
          {favorited ? "Remove from" : "Add to"} favorites
        </button>
      </div>
    );
  }
}

export default ArtistBox;
