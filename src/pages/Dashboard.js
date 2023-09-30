import React, { useEffect, useState, useCallback } from "react";
import { MovieList } from "./MovieList";
import axios from "axios";
import { API_URL } from "../constans/API";
import { Box, Button, Grid, TextField } from "@mui/material";
import Header from "../common-components/Header";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux-store/slices/movieSlice";
import PaginationComponent from "../common-components/PaginationComponent";

export const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  const moviesList = useSelector((state) => state?.moviesData?.moviesList?.results);
  const totalPages = useSelector((state) => state?.moviesData?.moviesList?.total_pages);
  let page = useSelector((state) => state?.moviesData?.moviesList?.page);
  console.log("moviesList", moviesList, "dashboard page", page);
  const [searchQuery, setSearchQuery] = useState("");
  
  // const [totalPages, setTotalPages] = useState();

  const changePage = (pageNumber) => {
    dispatch(getAllMovies(pageNumber));
    page = pageNumber;
    window?.scrollTo(0,0);
  };

  useEffect(() => {
    console.log("moviesList useeffect", moviesList, moviesList?.length < 1)
    if(!moviesList) {
      dispatch(getAllMovies(page));
    }
  }, []);

  const searchMovie = () => {
    navigate(`/search-movie/?query=${searchQuery}`);
  };
  return (
    <>
      <Grid container>
        <Header />
        <Grid style={{ display: "flex", margin: "auto", marginTop: "7px" }}>
          <TextField
            id="standard-textarea"
            label="Search Movie"
            placeholder="Search Movie"
            variant="standard"
            style={{width: "500px"}}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button
            style={{ margin: "10px", borderRadius:"20px" }}
            variant="contained"
            onClick={() => searchMovie()}
            disabled={!searchQuery}
          >
            Search
          </Button>
        </Grid>
        {moviesList?.length && (
          <>
            <MovieList moviesList={moviesList} />
          </>
        )}
      </Grid>
      {moviesList && moviesList?.length > 0 && (
        <PaginationComponent totalPages={totalPages} changePage={changePage} currentPage={page}/>

      )}
    </>
  );
};
