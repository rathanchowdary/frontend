import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = (props) => {
  const { search } = props;

  const searchChanged = (event) => {
    search(event);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <h5 className="navbar-brand">Rathan Chowdary</h5>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <span className="pr-2 d-flex align-items-center h-50 m-auto border border-dark rounded bg-secondary">
            <input
              type="search"
              placeholder="Filter by Movies"
              onChange={searchChanged}
              className="border-right border-top-0 border-left-0 border-bottom-0 rounded border-dark mr-2"
            />
            <BsSearch color="white" />
          </span>
          <Link className="nav-link active ml-5" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-link" to="/songs">
            Songs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
