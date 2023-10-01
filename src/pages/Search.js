import {
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constans/API";
import axios from "axios";
import Header from "../common-components/Header";
import PaginationComponent from "../common-components/PaginationComponent";
import { MovieList } from "../common-components/MovieList";

export const Search = () => {
  const searchParams = new URLSearchParams(document.location.search);
  const searchQuery = searchParams.get("query");
  const genreId = searchParams.get("genreId");
  console.log("genreId", genreId);

  const [moviesList, setMoviesList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const loadSearchMoviesData = async (pageNumber = page, type, subUrl) => {
    const url = `${API_URL}/${type}/movie?api_key=26eb8fe0ea17478b691097b4e10c4ac9${subUrl}&page=${pageNumber}`;
    const moviesData = await axios.get(url);
    console.log("movies Data", moviesData);
    setTotalPages(moviesData?.data?.total_pages);
    setTotalResults(moviesData?.data?.total_results);
    setMoviesList(moviesData?.data?.results);
  };

  const changePage = (pageNumber) => {
    setPage(pageNumber);
    window?.scrollTo(0, 0);
  };

  useEffect(() => {
    if (genreId) {
      const subUrl = `&with_genres=${genreId}`;
      loadSearchMoviesData(page, "discover", subUrl);
    } else {
      const subUrl = `&query=${searchQuery}`;
      loadSearchMoviesData(page, "search", subUrl);
    }
  }, [searchQuery, genreId, page]);

  return (
    <>
      <Header />
      <Grid
        style={{ padding: "25px", minHeight: "600px", marginTop: "5%" }}
        container
        spacing={2}
      >
        {searchQuery && searchQuery?.length && (
          <h2 style={{ color: "cornflowerblue", margin:"auto" }}>
            Total results for {searchQuery}: {totalResults}
          </h2>
        )}
        {moviesList?.length && <MovieList moviesList={moviesList} />}
      </Grid>
      <PaginationComponent
        totalPages={totalPages}
        changePage={changePage}
        currentPage={page}
      />
    </>
  );
};
