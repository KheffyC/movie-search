import MovieModal from "./MovieModal"
import { useState } from "react"

const MovieCard = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    
    <div className="Movie-Card-Container">
        <div className="Movie-Card" onClick={() => setIsModalOpen(true)}>
            <div className="poster-image">
                <img src={props.movieData.Poster} alt={props.movieData.Title}/>
            </div>
            <div className="content">
                <div className="Card-header">{props.movieData.Title}</div>
                <div className="label" style={{color: '#000'}}>{props.movieData.Type.toUpperCase()} ({props.movieData.Year})</div>
            </div>
            <hr style={{width: '300px'}} />
            <div className="extra-content" style={{fontSize: '20px'}}>
                NOW PLAYING
            </div>
        </div>
        <MovieModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}  
            movieData ={ props.movieData } 
        />
    </div>
  )
}

export default MovieCard