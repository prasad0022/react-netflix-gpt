import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null
    },
    reducers: {
        addMovies: (state, action) => {
            state.nowPlaying = action.payload;
        },
        removeMovies: (state) => {
            state.nowPlaying = null;
        }
    }
});

export const { addMovies, removeMovies } = moviesSlice.actions;
export default moviesSlice.reducer;