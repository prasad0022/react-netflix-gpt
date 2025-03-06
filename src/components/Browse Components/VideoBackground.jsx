import { useSelector } from "react-redux";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { mockTrailerKey } from "../../utils/mock_data/mockData";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ id }) => {
  useMovieTrailer(id);

  const trailerKey =
    useSelector((store) => store.movies.trailerKey) || mockTrailerKey;

  return (
    <div className="absolute top-0 -z-10 brightness-80">
      {trailerKey ? (
        <iframe
          className="w-[98.9vw] aspect-video"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}&controls=0&showinfo=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <p className="text-white">Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
