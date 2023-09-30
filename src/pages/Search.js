import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { API_URL, IMG_URL } from "../constans/API";
import axios from "axios";
import Header from "../common-components/Header";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../common-components/PaginationComponent";

export const Search = () => {
  const navigate = useNavigate();
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
      {console.log("result", moviesList)}
      {searchQuery && searchQuery?.length && (
          <h2 style={{color: "cornflowerblue"}}>
            Total results for {searchQuery}: {totalResults}
          </h2>
        )}
      <Grid
        style={{ padding: "25px", minHeight: "600px" }}
        container
        spacing={2}
      >
        
        {moviesList?.map((movie, idx) => (
          <Grid style={{ width: "90%" }} item xs={6} md={2.4} lg={2.4}>
            <div
              id={idx}
              onClick={() => navigate(`/movie-details?id=${movie?.id}`)}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 350 }}
                  image={IMG_URL + movie?.poster_path}
                  title="green iguana"
                />
                <CardContent className="movie-card-content">
                  <Typography className="typo" gutterBottom component="div">
                    {movie?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie?.release_date}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
      <PaginationComponent
        totalPages={totalPages}
        changePage={changePage}
        currentPage={page}
      />
    </>
  );
};
