import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name : 'movies',
    initialState : {
        NowPlayingMovies : {},
        AddTrailer : null,
    },
    reducers : {
        AddNowPLayingMovies : (state, actions) =>{
            state.NowPlayingMovies = actions.payload;
        },
        AddTrailerVideo : (state, actions) => {
            state.AddTrailer = actions.payload;
        }
    }
})


export const {AddNowPLayingMovies, AddTrailerVideo} = MoviesSlice.actions;
export default MoviesSlice.reducer;
