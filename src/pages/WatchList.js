import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../common-components/Header";
import { MovieList } from "../common-components/MovieList";

export const WatchList = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const tempList = JSON.parse(localStorage.getItem("watchList"));
    setMoviesList(tempList);
  }, []);
  return (
    <>
      <Header />
      <Grid container style={{ marginTop: "5%" }}>
        {moviesList && moviesList?.length < 1 && (
          <h2
            style={{
              color: "cornflowerblue",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            No movie is added to your watchList
          </h2>
        )}
        {moviesList?.length && <MovieList moviesList={moviesList} />}
      </Grid>
    </>
  );
};
