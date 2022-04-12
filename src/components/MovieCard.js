
const MovieCard = (props) => {

  return (
    
    <div className="Movie-Card-Container">
        <div className="poster-image">
         <img src={props.poster} alt={props.title}/>
        </div>
        <div className="content">
            <div className="Card-header">{props.title}</div>
            <div className="label">{props.type}</div>
        </div>
        <hr />
        <div className="extra-content">
            Now Playing
        </div>
    </div>
  )
}

export default MovieCard