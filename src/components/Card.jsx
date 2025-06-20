import { Link } from "react-router-dom"
import backup from "../assets/notFound.png"

export const Card = ({ movie }) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}`: backup;
  
  return (
    <div className="col">
    <div className="card shadow-sm" title={title}>
        <img src={image} className="card-img-top" alt="Image not found"/>
    <div className="card-body">
          <h5 className="card-title text-danger title-overflow">{title}</h5>
          <p className="card-text para-overflow ">{overview ? overview :"No description available for this movie stay tuned for more updates..." }</p>
    <div className="d-flex align-items-center justify-content-between">
          <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-danger stretched-link">Read More</Link>
          <small>
            <i className="bi bi-star-fill text-warning"></i> 
            {vote_average} | {vote_count}reviews
          </small>
          </div>
        </div>
    </div>
 </div>
  )
}