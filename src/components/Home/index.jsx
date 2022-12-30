import { Component } from "react";
import AlbumList from "../AlbumList";
import Header from "../Header";
import { ColorRing } from "react-loader-spinner";
import "./index.css";

class Home extends Component {
  state = { album: [], search: "", isLoading: true };

  dataFetching = async () => {
    const url = "/movies";

    const res = await fetch(url);

    if (res.ok === true) {
      const data = await res.json();
      const updatedData = data.map((each) => ({
        movieId: each.movie_id,
        name: each.name,
        language: each.language,
        url: each.url,
      }));

      this.setState({ isLoading: false, album: updatedData });
    }
  };

  componentDidMount() {
    this.dataFetching();
  }

  searchVal = (event) => {
    this.setState({ search: event.target.value });
  };

  filterResults = () => {
    const { search, album } = this.state;
    return album.filter((each) =>
      each.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  render() {
    const { isLoading } = this.state;
    const filterAlbum = this.filterResults();

    return isLoading ? (
      <div className="loader">
        <ColorRing height={80} width={80} />
      </div>
    ) : (
      <>
        <div className="header">
          <Header search={this.searchVal} />
        </div>
        <ul className="ul">
          {filterAlbum.map((each) => (
            <AlbumList item={each} key={each.movieId} />
          ))}
        </ul>
      </>
    );
  }
}

export default Home;
