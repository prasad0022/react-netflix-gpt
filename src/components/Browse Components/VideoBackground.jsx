import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/tmdbConfig";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerKey } from "../../utils/store/moviesSlice";

// eslint-disable-next-line react/prop-types
const VideoBackground = ({ id }) => {
  const dispatch = useDispatch();
  const trailerKey = useSelector((store) => store.movies.trailerKey);

  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
          API_OPTIONS
        );
        const jsonData = await response.json();

        if (jsonData.results.length > 0) {
          // Try finding an official trailer, otherwise pick the first available video
          const trailer =
            jsonData.results.find(
              (video) =>
                video.name.includes("Official Trailer") &&
                video.site === "YouTube"
            ) || jsonData.results[0]; // Fallback to first video if no trailer found

          if (trailer) {
            dispatch(addTrailerKey(trailer.key));
          }
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    };

    getMovieVideos();
  }, [id, dispatch]);

  return (
    <div className="absolute top-0 -z-10">
      {trailerKey ? (
        <iframe
          className="w-screen h-180"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&playlist=${trailerKey}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      ) : (
        <p className="text-white">Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
