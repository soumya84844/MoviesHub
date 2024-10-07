import React, { useState } from "react";
import SearchIcon from './SearchIcon.svg';
import MovieCard from './MovieCard';
import './App.css';

const API_URL = 'https://www.omdbapi.com/?apikey=ff26e336'

const App = () => {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);

  };

  return(
    <div className="app">
      <h1>MoviesHub</h1>
      <div className="search">
        <input 
        placeholder="Search for a Movie"
        onChange={(e) => setSearch(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt="Search"
        onClick={() => searchMovies(search)}
        />
      </div>

      {
        movies?.length > 0 ? (
          <div className="container">
            {
            movies.map((movie) => 
              <MovieCard movie={movie} />)            
            }
          </div>
        ) : (
          <div className="empty">
            <h2>Cannot find the movie!!</h2>
          </div>
        )
      }

    </div>
  );

};

export default App;