import MovieCard from "./MovieCard"

const MovieList = (props) => {
    const list = props.movieData.Search;
    console.log(list);

    <div>Hello
            <MovieCard             
                movie = {list}
            />
             {/* {list?.map((movie, i) => (
                   <div key={i}>Hello</div>
               ))} */}
           
    </div>
}

export default MovieList