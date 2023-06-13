import React from 'react';

const MovieCard = ({ movie, addMovie, removeMovie, watchList }) => {

  const inWatchlist = watchList.filter((mov) => {
    return mov.id === movie.id;
  });

  const button =
    inWatchlist.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add to List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    );


  return (
    <div className="movie-card" style={{ marginBottom: '32px' }}>
      <div className="movie-image">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.original_title}
          style={{ width: '250px', height: '250px', borderRadius: '8px' }}
        />
      </div>
      <h3>{movie.original_title}</h3>
      {button}
    </div>
  );
};

export default MovieCard;
