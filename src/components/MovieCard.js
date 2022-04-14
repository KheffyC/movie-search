import MovieDetails from "./MovieDetails"

const MovieCard = (props) => {
    console.log("my movie props are ", props)
    

  return (
    
    <div className="Movie-Card-Container">
        <div className="Movie-Card">
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
        {/* <div className="Detail-Card">
            <MovieDetails 
                movie = {props.movieData}
            /> 
        </div> */}
    </div>
  )
}

export default MovieCard