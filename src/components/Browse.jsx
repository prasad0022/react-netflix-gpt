import { useEffect } from "react";
import { NOW_PLAYING_OPTIONS, NOW_PLAYING_URL } from "../utils/constants";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/store/moviesSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNowPlayingMovies = async () => {
      try {
        const data = await fetch(NOW_PLAYING_URL, NOW_PLAYING_OPTIONS);
        const jsonData = await data.json();
        dispatch(addMovies(jsonData.results));
      } catch (error) {
        console.log(error);
      }
    };

    getNowPlayingMovies();
  }, [dispatch]);

  return (
    <div className="bg-gray-950 h-screen">
      <Header />
    </div>
  );
};

export default Browse;
