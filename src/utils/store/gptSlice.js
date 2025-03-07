import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptMovies: null,
        searchedMovies: null
    },
    reducers: {
        addGptMovies: (state, action) => {
            state.gptMovies = action.payload;
        },
        removeGptMovies: (state) => {
            state.gptMovies = null;
        },
        addSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        },
        removeSearchedMovies: (state) => {
            state.searchedMovies = null;
        }
    }
});

export const { addGptMovies, removeGptMovies, addSearchedMovies, removeSearchedMovies } = gptSlice.actions;

export default gptSlice.reducer;