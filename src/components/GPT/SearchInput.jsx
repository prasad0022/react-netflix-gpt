/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchInput = (props) => {
  const [serachString, setSearchString] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setSearchString(val);
  };

  return (
    <div className="flex gap-4 p-30 items-center justify-center">
      <input
        className="w-180 h-12 bg-gray-200 text-center text-black rounded-4xl text-xl shadow-gray-600 shadow-lg"
        name="serach-string"
        type="text"
        placeholder="Looking for something to watch ?"
        value={serachString}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          if (!serachString) return;
          props.onSearch(serachString);
          setSearchString("");
        }}
      >
        <img
          className="transform transition duration-300 hover:scale-120"
          src="https://img.icons8.com/windows/32/FFFFFF/search-more.png"
          alt="search-more"
        />
      </button>
    </div>
  );
};

export default SearchInput;
