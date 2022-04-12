import React from 'react'
import MovieCard from './MovieCard'
import MovieDetails from './MovieDetails'
import { useState } from 'react'

const Home = () => {
    const [search, setSearch] = useState('Toy Story')
    const [movies, setMovies] = useState('')

    const clickSearch = () => {
        const API_KEY = "af8f347a";

        async function getMovieByName(name) {
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${name}`;
            let res = await fetch(url)
            const data = await res.json();
            setMovies(data)
            console.log(data)
        }
        getMovieByName(search)
    }

  return (
    <div className='Home-Container'>
        <div className='Home-Hero-Container'>
            Enter your Movie Name here!
            <div className='input-field'>
                <input 
                    className="search-field" 
                    type='text' 
                    placeholder={'Movie Name'} 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='btn' onClick={clickSearch}>Search</button>
            </div>
        </div>
        <div className='MovieListItem'>
            <MovieCard 
                title={movies.Title}
                movieSearch = {search}
                poster={movies.Poster}
                type={movies.Type}
            />
            <MovieDetails 
                imdbRating={movies.ImdbRating}
                plot={movies.Plot}
                rated={movies.Rated}
                genre= {movies.Genre}
                runtime={movies.Runtime}
            />

        </div>


    </div>
  )
}

export default Home