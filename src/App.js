import { useEffect, useState } from 'react';
import MovieCards from './MovieCards';
import './App.css';
import SearchIcon from './search.svg';
//ead0554

const API_URL = 'http://www.omdbapi.com?apikey=ead0554'

const m1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies({searchText})
  }, []);

  return (
    <>
      <div className='app'>
        <h1>FilmFusion</h1>
        <div className='search'>
          <input
            placeholder='Search for movies'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt='Search'
            onClick={() => searchMovies(searchText)}
          />
        </div>
        {movies?.length > 0 
          ? (
            <div className='container'>
              { movies.map((movie) => (
                <MovieCards movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
                <h2>No Movies Found</h2>
            </div>
          )}
        
      </div>
    </>
  )
}

export default App;