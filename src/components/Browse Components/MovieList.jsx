/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  const scrollRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    setCanScrollLeft(scrollRef.current.scrollLeft > 0);
    setCanScrollRight(
      scrollRef.current.scrollLeft <
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
    );
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 800;
    scrollRef.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative px-10 group py-3"
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
    >
      <h1 className="text-2xl pb-1">{title}</h1>
      <div className="relative">
        {/* Left Scroll Button */}
        {showButtons && canScrollLeft && (
          <button
            className="absolute -left-8 top-1/2 -translate-y-1/2 hidden group-hover:block transform transition duration-300 hover:scale-150"
            onClick={() => scroll(-1)}
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/chevron-left.png"
              alt="chevron-right"
            />
          </button>
        )}

        {/* Movie List */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-scroll no-scrollbar"
        >
          <div className="flex">
            {movieList &&
              movieList.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))}
          </div>
        </div>

        {/* Right Scroll Button */}
        {showButtons && canScrollRight && (
          <button
            className="absolute -right-8 top-1/2 -translate-y-1/2 hidden group-hover:block transform transition duration-300 hover:scale-150"
            onClick={() => scroll(1)}
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-right.png"
              alt="chevron-right"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
