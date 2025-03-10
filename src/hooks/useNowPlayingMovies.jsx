import { useEffect } from "react";
import { API_OPTIONS } from "../utils/tmdbConfig";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying);

  const getNowPlayingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const jsonData = await data.json();
      dispatch(addMovies(jsonData?.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
