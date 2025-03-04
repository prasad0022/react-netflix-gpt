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
        },
        removeTrailerKey: (state) => {
            state.trailerKey = null;
        },
    }
});

export const { addMovies, removeMovies, addTrailerKey, removeTrailerKey } = moviesSlice.actions;
export default moviesSlice.reducer;