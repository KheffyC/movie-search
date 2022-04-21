import { useState } from 'react'
import Home from './Home'

const CardForm = () => {
    const [ movieTitle, setMovieTitle ] = useState('')
    const [ movieType, setMovieType ] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        const payload = {
            movieTitle: movieTitle,
            movieType
        }
        console.log('payload is', payload)
    } 
  return (
    <>
     <form onSubmit={handleSubmit}>
        <div className='Form-inputWrapper'>
            <label className='label' htmlFor='Title'>
                    Title
            </label>
            <input 
                className='input'
                name='Title'
                type='text' 
                value={movieTitle} 
                onChange={(event) => setMovieTitle(event.target.value)} 
            />
            <label className='label' htmlFor='Type'>Type:</label>
            <select  className='search-type' name='Type' onChange={(event) => setMovieType(event.target.value)}>
                <option value='empty'></option>
                <option value='Movie'> Movie</option>
                <option value='Series'>Series</option>
            </select>
        </div>
        <button type='submit' className='Button'>
            Submit
        </button>
     </form>
    </>
  )
}

export default CardForm