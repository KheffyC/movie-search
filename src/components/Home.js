import React from 'react'
import { useState, useEffect } from 'react'
import MovieList from './MovieList'

const Home = () => {
    const [show, setShow] = useState('')
    const [search, setSearch] = useState('')
    const [movies, setMovies] = useState('')


  //create use effect
  //move async function and show inside useEffect
  //add dependency array - state or function to run again (movies? potentially)
  

  useEffect(() => {

    const API_KEY = "af8f347a";
    async function movieData(search) {
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`;
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



  return (
    <div className='Home-Container'>      
        <div className='Home-Hero-Container'>
            Enter your Movie Name here!
            <div className='input-field'>
                <input 
                    className="search-field" 
                    type='text' 
                    value = {search}
                    placeholder={'Movie Name, Keyword, Series ...'} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
        {  
            show &&  <MovieList
                        movieData = {movies}                
                    />
        }


    </div>
  )
}



export default Home