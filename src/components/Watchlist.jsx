import React from 'react';
import MovieCard from './MovieCard';

const Watchlist = ({ watchList, removeMovie }) => {
  const movieDisplay = watchList.map((movie) => (
    <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} watchList={watchList} />
  ));

  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
};

export default Watchlist;
