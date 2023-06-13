import React from 'react';
import MovieCard from './MovieCard';

function MovieScreen({ movieList, addMovie, removeMovie, watchList, page, setPage }) {
  const movieDisplay = movieList.map((movie) => (
    <MovieCard movie={movie} key={movie.id} addMovie={addMovie} removeMovie={removeMovie} watchList={watchList} />
  ));

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    if(page === 1) return;
    setPage(page - 1);
  };
  return (
    <div className="page">
      <h1>Ayuub's Movie Theatre</h1>
      <h3>Add a movie to your watchlist</h3>
      <div className="btn-container">
        <button onClick={decrementPage}>Previous</button>
        <button onClick={incrementPage}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
