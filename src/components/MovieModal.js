import ReactModal from "react-modal"
import { useEffect, useState } from "react";
import {FaTimes} from 'react-icons/fa'
import MovieDetails from "./MovieDetails";

const modalStyles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    width: 950,
    height: 650,
    inset: 0,
    padding: 0,
  },
};

const MovieModal = ({ isModalOpen, setIsModalOpen, movieData }) => {
  // console.log("Movie Modal prop is ", movieData)

  const [ModalMovie, setModalMovie] = useState('')

  async function getMoviesById(id){
    const API_KEY = "af8f347a";
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;
        let res = await fetch(url)
        const data = await res.json();
        setModalMovie(data)
        console.log("this is my async function" , ModalMovie)
        

  }
  
  useEffect(() => {
    ReactModal.setAppElement("body");

    getMoviesById(movieData.imdbID);
    
  },[isModalOpen])

  return (
    <ReactModal className="Modal" isOpen={isModalOpen} style={modalStyles}>
      <div className="Modal-TitleBar">
        <div className="Modal-Title">{movieData.Title}</div>
        <div
          className="Modal-CloseButtonWrapper"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes style={{ fontSize: 'large', color: 'rgb(141, 39, 39)', cursor: 'pointer' }} />
        </div>
      </div>
      <div className="MovieDetails">
        <MovieDetails 
         movie = {ModalMovie}
         movieCard = {movieData}
         />
      </div>
    </ReactModal>
  )
}

export default MovieModal