/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="px-10 py-5">
      <h1 className="text-2xl font-medium pb-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieList &&
            movieList.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
