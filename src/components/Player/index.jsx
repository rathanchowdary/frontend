import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { MdOutlineReplay5, MdOutlineForward5 } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import "./index.css";

const Player = (props) => {
  const { data, nxtSong, prevSong } = props;

  const nextSong = () => {
    nxtSong();
  };

  const previousSong = () => {
    prevSong();
  };

  return (
    <div className="song-card">
      <a href={data.songUrl} download className="download">
        <span className="mr-2">
          <AiOutlineDownload fontSize={24} />
        </span>
        Download
      </a>
      <img src={data.imgUrl} alt={data.name} className="song-img" />
      <div>
        <div className="song-text">
          <h1 className="song-name">{data.name}</h1>
          <span className="d-flex flex-row justify-content-between align-items-center mb-2 mr-2 mt-4">
            <h4>{data.movieName}</h4>
            <p>Language: {data.language}</p>
          </span>
        </div>
        <span className="player">
          <AudioPlayer
            src={data.songUrl}
            autoPlay
            showSkipControls
            showFilledVolume
            onClickPrevious={previousSong}
            onClickNext={nextSong}
            onEnded={nextSong}
            customIcons={{
              play: <BsFillPlayFill fontSize={40} />,
              pause: <BsFillPauseFill fontSize={40} />,
              rewind: <MdOutlineReplay5 fontSize={30} />,
              forward: <MdOutlineForward5 fontSize={30} />,
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default Player;
