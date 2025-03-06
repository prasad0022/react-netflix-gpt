// eslint-disable-next-line react/prop-types
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-50 py-4 px-3">
      <img
        className="rounded-xl transform transition duration-300 hover:scale-110"
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
        alt="movies-poster"
      />
    </div>
  );
};

export default MovieCard;
