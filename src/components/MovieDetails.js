
const MovieDetails = (props) => {

  return (
    <div className="MovieCardContent">
      <div className="label"> { props.movie.imdbRating } </div>
      <div className="plot" style={{color: 'black', fontWeight: '500', fontSize: '27px'}}>
        <span>{ props.movie.Plot }</span>
      </div>
      <div className="label" style={{fontFamily: 'gotham Bold', color: 'black', fontSize: '32px', fontWeight: '400'}}>
        { props.movie.Rated }
      </div>
      <ul className="movieTags">
        <li className="tagLabel">{ props.movie.Genre }</li>
        <li className="tagLabel">{ props.movie.Runtime }</li>
      </ul>
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