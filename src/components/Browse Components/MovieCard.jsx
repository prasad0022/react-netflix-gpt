// eslint-disable-next-line react/prop-types
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-50 p-2">
      <img
        className="rounded-2xl"
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
        alt="movies-poster"
      />
    </div>
  );
};

export default MovieCard;
