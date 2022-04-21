import ReactModal from "react-modal"
import { useEffect } from "react";
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
    width: 850,
    height: 650,
    inset: 0,
    padding: 0,
  },
};

const MovieModal = ({ isModalOpen, setIsModalOpen, movieData }) => {

  useEffect(() => {
    ReactModal.setAppElement("body");
  },[])

  return (
    <ReactModal className="Modal" isOpen={isModalOpen} style={modalStyles}>
      <div className="Modal-TitleBar">
        <div className="Modal-Title">Movie Details</div>
        <div
          className="Modal-CloseButtonWrapper"
          onClick={() => setIsModalOpen(false)}
        >
          <FaTimes style={{ fontSize: 'large', color: 'rgb(141, 39, 39)', cursor: 'pointer' }} />
        </div>
      </div>
      <div className="MovieDetails">
        <MovieDetails 
         movie = {movieData}/>
      </div>
    </ReactModal>
  )
}

export default MovieModal