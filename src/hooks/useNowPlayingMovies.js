import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/tmdbConfig";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/store/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getNowPlayingMovies = async () => {
            try {
                const data = await fetch(NOW_PLAYING_URL, API_OPTIONS);
                const jsonData = await data.json();
                dispatch(addMovies(jsonData?.results));
            } catch (error) {
                console.error(error);
            }
        };

        getNowPlayingMovies();
    }, [dispatch]);
}

export default useNowPlayingMovies;