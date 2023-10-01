export const addToWatchList = (movie) => {
  const listFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
  let tempMovieList = [];
  if (listFromLocalStorage && listFromLocalStorage?.length > 0) {
    tempMovieList = [...listFromLocalStorage, movie];
  } else {
    tempMovieList.push(movie);
  }
  localStorage.setItem("watchList", JSON.stringify(tempMovieList));
  return true;
};

export const checkMovieForWatchList = (movieId) => {
  const listFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
  if (listFromLocalStorage && listFromLocalStorage?.length > 0) {
    const filteredMovie = listFromLocalStorage?.filter((ele) => {
      return ele.id === movieId;
    });
    if (filteredMovie && filteredMovie?.length > 0) {
      return true;
    }
  }
  return false;
};

export const removeFromWatchlist = (movieId) => {
  const listFromLocalStorage = JSON.parse(localStorage.getItem("watchList"));
  if (listFromLocalStorage && listFromLocalStorage?.length > 0) {
    const filteredMovie = listFromLocalStorage?.filter((ele) => {
      return ele.id !== movieId;
    });
    localStorage.setItem("watchList", JSON.stringify(filteredMovie));
    return true;
  }
  return false;
};
