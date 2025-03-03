import VideoBackground from "./VideoBackground";
import VideoHeader from "./VideoHeader";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlaying);
  if (!moviesList) return;

  const mainMovie = moviesList[0];

  const { id, original_title, overview } = mainMovie;

  return (
    <div>
      <VideoHeader original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
