import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from './MovieList'

const Home = () => {
    const [show, setShow] = useState('')
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState('')
    const [movieType, setMovieType] = useState('')

  

    useEffect(() => {
    
    const API_KEY = "af8f347a";
    async function movieData(search) {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
        let res = await fetch(url)
        const data = await res.json();
        setMovies(data)
    }


        movieData(search)

        if (movies){
            setShow(true);
        } else {
            console.log("Sorry! The search results are undefined")
            setShow(false);
        }

    }, [search])


// Need to figure out how to pass payload to API when Submit button is clicked. Submit button currently dysfunctional 
  function handleSubmit(e) {
      e.preventDefault();
    const payload = {
        movieTitle: search,
        movieType
    }

  }

 
  return (
    <div className='Home-Container'>   
        <div className='Home-Hero-Container'>
            {/* Enter your Movie Name here! */}
            <form onSubmit={handleSubmit}>
                <div className='form-box'>
                    <div className='input-field'>
                        <label className='label' htmlFor='Search-Field'>
                            Movie Search
                        </label>
                        <input 
                            className="search-field" 
                            name= 'Search Field'
                            type='text' 
                            value = {search}
                            placeholder={'Movie Name, Keyword, Series ...'} 
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className='dropdown-box'>
                        <label className='label' htmlFor='Type'>Type:</label>
                        <select  className='search-type' name='Type' onChange={(event) => setMovieType(event.target.value)}>
                            <option value='empty'></option>
                            <option value='Movie'> Movie</option>
                            <option value='Series'>Series</option>
                        </select>
                    </div>
                    <button className='Button' type='submit' onClick={() => handleSubmit()}>Submit</button>
                </div>
            </form>
        </div>
        {  
            show &&  
                <MovieList
                    movieData = {movies}                
                />
        }
       


    </div>
  )
}



export default Home