import MovieCard from "./MovieCard"

const MovieList = (props) => {
  return(
    <div className="MovieListItem">
        
        {props.movieData.Search?.map((movie, i) => (
            <div key={i}>
                <MovieCard 
                    movieData = {movie}                     
                />
            </div>
        ))}
           
    </div>)
}

export default MovieList