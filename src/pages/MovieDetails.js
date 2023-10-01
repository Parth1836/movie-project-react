import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_URL, IMG_URL } from "../constans/API";
import axios from "axios";
import Header from "../common-components/Header";
import "./MovieDetails.css";
import {
  addToWatchList,
  checkMovieForWatchList,
  removeFromWatchlist,
} from "../common-functions/watchList";
import { convertMinutesToHours } from "../common-functions/convertMinutes";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const MovieDetails = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const movieId = searchParams.get("id");
  const [movieDetails, setMovieDetail] = useState(null);
  const [isAddedToWatchList, setIsAddedToWatchList] = useState(false);
  const [genres, setGenres] = useState("");
  const loadMovieDetail = async () => {
    const url = `${API_URL}/movie/${movieId}?api_key=26eb8fe0ea17478b691097b4e10c4ac9`;
    const movieData = await axios.get(url);
    const genresDetails = movieData?.data?.genres?.map((gen) => gen?.name);
    setGenres(genresDetails?.join(" "));
    setMovieDetail(movieData?.data);
  };

  useEffect(() => {
    loadMovieDetail();
  }, []);

  useEffect(() => {
    const isAdded = checkMovieForWatchList(movieDetails?.id);
    setIsAddedToWatchList(isAdded);
  }, [movieDetails]);

  const handleWatchList = () => {
    if(isAddedToWatchList){
      removeFromWatchlist(movieDetails?.id);
      setIsAddedToWatchList(false);
    }else {
      const added = addToWatchList(movieDetails);
      setIsAddedToWatchList(added);
    }
    
  };
  return (
    <>
      <Header />
      <Paper
        className="movie-detail-paper"
        elevation={3}
        style={{
          padding: "20px",
          width: "100%",
          backgroundImage: `url(${IMG_URL}${movieDetails?.backdrop_path})`,
          backgroundSize: "cover",
          marginTop: "5%"
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography style={{ color: "white" }} variant="h4">
              {movieDetails?.title}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <LazyLoadImage
              style={{ width: "50%", height: "400px" }}
              src={IMG_URL + movieDetails?.poster_path}
              alt="Image Alt"
            />
          </Grid>
          <Grid className="movie-details" item xs={6}>
            <Typography className="movie-typo" variant="body1">
              Release Date: {movieDetails?.release_date}
            </Typography>
            <Typography className="movie-typo" variant="body1">
              IMDB Rating: {movieDetails?.vote_average}
            </Typography>
            <Typography className="movie-typo" variant="body1">
              Genre: {genres}
            </Typography>
            <Typography className="movie-typo" variant="body1">
              Description: {movieDetails?.tagline}
            </Typography>
            <Typography className="movie-typo" variant="body1">
              Duration: {convertMinutesToHours(movieDetails?.runtime)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleWatchList()}
            >
              {isAddedToWatchList ? "Remove from WatchList" : "Add To Watchlist"}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
