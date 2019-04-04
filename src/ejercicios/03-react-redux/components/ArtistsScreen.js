import React, { Component } from "react";
import ArtistBox from "./ArtistBox";

class ArtistsScreen extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    fetch(
      "https://s3-us-west-2.amazonaws.com/io.underscope.exercises/artist-list.json"
    )
      .then(response => response.json())
      .then(({ artists: { items } }) =>
        items.map(
          ({ id, name, images, followers: { total: followersCount } }) => ({
            id,
            name,
            imageUrl: images[0]
              ? images[0].url
              : `https://api.adorable.io/avatars/285/${id}`,
            followersCount
          })
        )
      )
      .then(artists => this.setState({ artists }))
      .catch(err => console.error(err));
  }

  render() {
    const { filterText } = this.props;
    const { artists } = this.state;

    const regex = new RegExp(filterText, "i");
    const filteredArtists = artists.filter(artist => regex.test(artist.name));

    return filteredArtists.map(artist => <ArtistBox artist={artist} />);
  }
}

export default ArtistsScreen;
