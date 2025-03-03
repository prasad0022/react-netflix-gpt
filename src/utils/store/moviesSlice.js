import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        trailerKey: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        removeMovies: (state) => {
            state.nowPlaying = null;
        },
        addTrailerKey: (state, action) => {
            state.trailerKey = action.payload;
        }
    }
});

export const { addMovies, removeMovies, addTrailerKey } = moviesSlice.actions;
export default moviesSlice.reducer;