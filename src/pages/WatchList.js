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
    <Grid style={{display:"flex", margin: "auto"}}>
    </Grid>
  {moviesList?.length && (
      <MovieList moviesList={moviesList} />
  )}
</Grid>
  )
}
