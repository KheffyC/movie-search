
const MovieDetails = (props) => {
  console.log("This is my Movie Detail props", props)

  return (
    <div className="MovieCardContent">
      <div>
        <img className="ModalPoster" src={props.movieCard.Poster} alt={props.movieCard.Title} />
      </div>
      <div className="ModalDetails">
        <div className="plot" style={{color:'gray', fontSize: '28px'}}>
          <span>{ props.movie.Plot }</span>
        </div>
        <ul className="movieTags">
          <li className="tagLabel">{ props.movie.Rated }</li>
          <li className="tagLabel"> { props.movie.imdbRating } </li>
          <li className="tagLabel">{ props.movie.Genre }</li>
          <li className="tagLabel">{ props.movie.Runtime }</li>
        </ul>
      </div>
    </div>
  )
}

// MovieDetails.defaultProps = {
//   plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
// }

// MovieDetails.propTypes ={
//   plot: PropTypes.string.isRequired,
// };


export default MovieDetails