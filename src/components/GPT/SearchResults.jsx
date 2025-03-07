/* eslint-disable react/prop-types */
const SearchResults = ({ searchedMovies }) => {
  return (
    <div className="text-white text-2xl">
      <ul className="flex flex-wrap justify-center">
        {searchedMovies.map((movie, index) => (
          <li
            className="bg-neutral-600 w-100 m-2 p-2 text-white rounded-2xl text-center shadow-md shadow-gray-200"
            key={index}
          >
            {movie}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
