import { useEffect } from "react";
import { API_OPTIONS } from "../utils/tmdbConfig";
import { useDispatch } from "react-redux";
import { addTrailerKey } from "../utils/store/moviesSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();

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
  }, [dispatch, id]);
};

export default useMovieTrailer;
