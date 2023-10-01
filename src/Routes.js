import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { MovieList } from "./common-components/MovieList";
import { Search } from "./pages/Search";
import Header from "./common-components/Header";
import { AboutUs } from "./pages/AboutUs";
import { MovieDetails } from "./pages/MovieDetails";
import { WatchList } from "./pages/WatchList";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />{" "}
        <Route exact path="/dashboard" element={<Dashboard />} />{" "}
        <Route exact path="/header" element={<Header />} />{" "}
        <Route exact path="/movie-list" element={<MovieList />} />{" "}
        <Route exact path="/search-movie" element={<Search />} />{" "}
        <Route exact path="/about-us" element={<AboutUs />} />{" "}
        <Route exact path="/movie-details" element={<MovieDetails />} />{" "}
        <Route exact path="/watchlist" element={<WatchList />} />{" "}
        
      </Routes>{" "}
    </BrowserRouter>
  );
};
