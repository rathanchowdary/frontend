import { Component } from "react";
import Player from "../Player";
import { ColorRing } from "react-loader-spinner";

class Songs extends Component {
  state = {
    isLoading: true,
    songData: [
      {
        songId: "",
        name: "",
        language: "",
        imgUrl: "",
        songUrl: "",
        movieName: "",
      },
    ],
    count: 0,
  };

  componentDidMount() {
    this.getSongDetails();
  }

  getSongDetails = async () => {
    const url = `/songs`;

    const res = await fetch(url);

    if (res.ok === true) {
      const data = await res.json();

      const updatedData = data.map((each) => ({
        songId: each.song_id,
        name: each.name,
        language: each.language,
        imgUrl: each.img_url,
        songUrl: each.song_url,
        movieName: each.movie_name,
      }));

      this.setState({ songData: updatedData, isLoading: false });
    }
  };

  prevSong = () => {
    const { count, songData } = this.state;

    count !== 0
      ? this.setState({ count: count - 1 })
      : this.setState({ count: songData.length - 1 });
  };

  nxtSong = () => {
    const { count, songData } = this.state;

    count !== songData.length - 1
      ? this.setState({ count: count + 1 })
      : this.setState({ count: 0 });
  };

  render() {
    const { songData, count, isLoading } = this.state;
    return isLoading ? (
      <div className="loader">
        <ColorRing height={80} width={80} />
      </div>
    ) : (
      <Player
        data={songData[count]}
        key={songData[count].songId}
        prevSong={this.prevSong}
        nxtSong={this.nxtSong}
      />
    );
  }
}

export default Songs;
