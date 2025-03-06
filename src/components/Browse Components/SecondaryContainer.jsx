import {
  mockNowPlayingMovies,
  mockPopularMovies,
  mockTopRatedMovies,
  mockUpcomingMovies,
} from "../../utils/mock_data/mockData";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies =
    useSelector((store) => store.movies.nowPlayingMovies) ||
    mockNowPlayingMovies;

  return (
    <div className="text-white bg-black bg-gradient-to-b from-gray-900 rounded-t-3xl pt-1 mt-2">
      <MovieList title="Now Playing" movieList={nowPlayingMovies} />
      <MovieList title="Popular" movieList={mockPopularMovies} />
      <MovieList title="Top Rated" movieList={mockTopRatedMovies} />
      <MovieList title="Upcoming" movieList={mockUpcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
