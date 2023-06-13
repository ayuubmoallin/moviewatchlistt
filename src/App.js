
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
function App() {
  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      const response = await axios.get(API_URL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      });
      const movies = response.data.results;
      setMovieList(movies);
    } catch (error) {
      console.error(error);
    }
  };
  const addMovie = (movie) => {
    setWatchList((prevWatchlist) => [...prevWatchlist, movie]);
    alert("Movie has been added to watchlist. See at the bottom of he page")
  };

  function removeMovie(movie) {
    const newState = watchList.filter(m => m !== movie);
    setWatchList(newState);
  }


  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <Watchlist watchList={watchList} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
