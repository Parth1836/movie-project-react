export const addToWatchList = (movie) => {
  const listFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
  let tempMovieList = [];
  console.log(
    "4 watchList fun",
    listFromLocalStorage,
    listFromLocalStorage?.length > 0
  );
  if (listFromLocalStorage && listFromLocalStorage?.length > 0) {
    console.log("listFromLocalStorage", listFromLocalStorage);
    tempMovieList = [...listFromLocalStorage, movie];
  } else {
    tempMovieList.push(movie);
  }
  console.log("new tempMovieList", tempMovieList);
  localStorage.setItem("watchList", JSON.stringify(tempMovieList));
  return true;
};

export const checkMovieForWatchList = (movieId) => {
  const listFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
  console.log(
    "23 checkwatchList fun",
    listFromLocalStorage,
    listFromLocalStorage?.length > 0,
    movieId
  );
  if (listFromLocalStorage && listFromLocalStorage?.length > 0) {
    const filteredMovie = listFromLocalStorage?.filter((ele) => {
      return ele.id === movieId;
    });
    console.log("filteredMovie", filteredMovie);
    if (filteredMovie && filteredMovie?.length > 0) {
      return true;
    }
  }
  return false;
};

export const removeFromWatchlist = (movieId) => {
  const listFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
  console.log(
    "43 removeFromWatchlist fun",
    listFromLocalStorage,
    listFromLocalStorage?.length > 0,
    movieId
  );
  if (listFromLocalStorage && listFromLocalStorage?.length > 0) {
    const filteredMovie = listFromLocalStorage?.filter((ele) => {
      return ele.id !== movieId;
    });
    console.log("filteredMovie", filteredMovie);
    localStorage.setItem("watchList", JSON.stringify(filteredMovie));
    return true;
  }
  return false;
};
