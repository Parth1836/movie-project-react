import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constans/API";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    moviesList: [],
  },
  reducers: {
    setMoviesList: (state, action) => {
      console.log("set all movies");
      state.moviesList = action.payload;
    },
  },
});

export const getAllMovies = (pageNumber=1) => {
  return async (dispatch) => {
    dispatch(setMoviesList());
    const url =
      API_URL +
      `/discover/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9&page=${pageNumber}`;
    const { data } = await axios.get(url);
    console.log("users list", data);
    dispatch(setMoviesList(data));
  };
};


export const { setMoviesList } = movieSlice.actions;

export default movieSlice.reducer;
