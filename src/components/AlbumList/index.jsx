import { Link } from "react-router-dom";
import "./index.css";

const AlbumList = (props) => {
  const { item } = props;
  const { url, name, language } = item;
  return (
    <li className="li-items">
      <Link to={`/songs/${name}`} className="li-link">
        <img src={url} alt={name} className="thumbnail" />
        <div className="li-text">
          <p className="movie-name">{name}</p>
          <p className="language">{language}</p>
        </div>
      </Link>
    </li>
  );
};

export default AlbumList;
