import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import { NavLink } from "react-router";
import model from "../../utils/geminiConfig";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies, removeGptMovies } from "../../utils/store/gptSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const searchedMovies = useSelector((store) => store.gpt.gptMovies);

  const handleSearch = async (searchString) => {
    try {
      const prompt = `Give me only 18 movies related to ${searchString} in following example format in string. Don't give anything alse. Format: Don, Avengers, Batman, Hunter, Gold`;

      const result = await model.generateContent(prompt);
      dispatch(addGptMovies(result.response.text().split(", ")));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-black bg-gradient-to-b from-gray-900 h-screen">
      <div onClick={() => dispatch(removeGptMovies())}>
        <NavLink to="/browse">
          <img
            className="absolute w-7 right-10 top-10 transform transition duration-300 hover:scale-120"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/home.png"
            alt="home"
          />
        </NavLink>
      </div>
      <SearchInput onSearch={handleSearch} />
      {searchedMovies && <SearchResults searchedMovies={searchedMovies} />}
    </div>
  );
};

export default GPTSearch;
