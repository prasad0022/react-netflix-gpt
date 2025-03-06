import SearchInput from "./SearchInput";
import SerachResults from "./SerachResults";
import { NavLink } from "react-router";

const GPTSearch = () => {
  const handleSearch = (serachString) => {
    console.log(serachString);
  };

  return (
    <div className="bg-black bg-gradient-to-b from-gray-900 h-screen">
      <div>
        <NavLink to="/browse">
          <img
            className="absolute w-7 right-10 top-10 transform transition duration-300 hover:scale-120"
            src="https://img.icons8.com/material-rounded/24/FFFFFF/home.png"
            alt="home"
          />
        </NavLink>
      </div>
      <SearchInput onSearch={handleSearch} />
      <SerachResults />
    </div>
  );
};

export default GPTSearch;
