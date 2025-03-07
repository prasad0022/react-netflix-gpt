import { API_OPTIONS } from "../utils/tmdbConfig";

const useSearchMovie = async (movieName) => {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export default useSearchMovie;
