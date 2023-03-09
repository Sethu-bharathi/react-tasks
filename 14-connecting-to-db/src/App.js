import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
 
  const [movies, setmovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const fetchMovieHandler = useCallback(async () => {
    setisLoading(true);
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();

    const transformedMovies = data.results.map((movie) => {
      return {
        id: movie.episode_id,
        title: movie.title,
        openingText: movie.opening_crawl,
        releaseDate: movie.release_data,
      };
    });
    setmovies(transformedMovies);
    setisLoading(false);
  },[]);
  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);


  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}

        {isLoading && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
