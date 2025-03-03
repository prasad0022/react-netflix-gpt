import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./Browse Components/MainContainer";
import SecondaryContainer from "./Browse Components/SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="h-screen">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
