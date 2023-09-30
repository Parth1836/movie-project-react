import { Button, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../common-components/Header';
import { MovieList } from './MovieList';

export const WatchList = () => {
    const [moviesList, setMoviesList] = useState([]);
    useEffect(()=> {
        const tempList = JSON.parse(localStorage.getItem("watchList"));
        console.log("watchList moviews", tempList);
        setMoviesList(tempList);
    },[])
  return (
    <Grid container>
    <Header />
    {moviesList && moviesList?.length < 1 && (
          <h2 style={{color: "cornflowerblue", margin:"auto", marginTop: "20px"}}>
            No movie is added to your watchList
          </h2>
        )}
  {moviesList?.length && (
      <MovieList moviesList={moviesList} />
  )}
</Grid>
  )
}
