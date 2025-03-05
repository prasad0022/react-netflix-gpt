import VideoBackground from "./VideoBackground";
import VideoHeader from "./VideoHeader";
import { useSelector } from "react-redux";
import { mockMainMovie } from "../../utils/mock_data/mockData";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlaying);

  // Ensure moviesList has at least one movie before accessing index 0
  const mainMovie = moviesList?.length > 0 ? moviesList[0] : mockMainMovie;

  const { id, original_title, overview } = mainMovie || {}; // Avoids destructuring errors

  return (
    <div>
      <VideoHeader original_title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
