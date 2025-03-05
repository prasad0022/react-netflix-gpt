import { useEffect } from "react";
import { API_OPTIONS } from "../utils/tmdbConfig";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
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

    getNowPlayingMovies();
  }, [dispatch]);
};

export default useNowPlayingMovies;
