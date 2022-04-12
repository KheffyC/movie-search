
const MovieCard = (props) => {

  return (
    
    <div className="Movie-Card-Container">
        <div className="poster-image">
         <img src={props.poster} alt={props.title}/>
        </div>
        <div className="content">
            <div className="Card-header" style={{fontFamily: 'Typo Square Bold Demo',fontWeight: 500, color: 'black'}}>{props.title}</div>
            <div className="label" style={{color: 'gray'}}>{props.type}</div>
        </div>
        <hr />
        <div className="extra-content" style={{fontSize: '20px'}}>
            NOW PLAYING
        </div>
    </div>
  )
}

export default MovieCard