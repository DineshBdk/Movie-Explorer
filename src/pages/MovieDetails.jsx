import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import backup from '../assets/notFound.png'

export const MovieDetails = ( ) => {
  const params = useParams()
  const [movie, setMovie] = useState([])
  const key = import.meta.env.VITE_API_KEY
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backup;
  
  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await axios.get(url)
        setMovie(res.data)
      }
      catch(error){
        console.log("Api Error:", error);
      }
    }
    fetchMovie()
  },[])
  useEffect(() => {
    document.title = `${movie.title}`
  })
  return (
    <div className="movieDetails">
    <main className="container">
      <h5 className="text-warning py-2 border-bottom mb-3">{movie.title}</h5>
        <div className="row">
          <div className="col-md-4">
            <img src={image} className="img-fluid img-thumbnail"/>
          </div>
          <div className="col-md-8">
            <h3 className="text-primary">{movie.title}</h3>
            <p className="mt-3">{movie.overview}</p>
            
            {movie.genres ? (
            <p className="d-flex gap-3">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="badge bg-danger">{genre.name}</span>
            ))}
              </p>) : ("")
            }
            <p className="mb-2">
              <i className="bi bi-star-fill text-warning" />{movie.vote_average} |
              <i className="bi bi-people-fill text-primary"/>{movie.vote_count} reviews
            </p>
            <table className="table table-bordered w-50 mt-3">
              <tbody>
                <tr>
                  <th>Runtime</th>
                  <td>{movie.runtime} minutes</td>
                </tr>
                <tr>
                  <th>Budget</th>
                  <td>{movie.budget}</td>
                </tr>
                <tr>
                  <th>Revenue</th>
                  <td>{movie.revenue}</td>
                </tr>
                <tr>
                  <th>Releasa Date</th>
                  <td>{movie.release_date}</td>
                </tr>
              </tbody>
            </table>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`}
              className="btn btn-warning" target="_blank">View in IMDB</a>
           </div>
        </div>    
    </main>
  </div>
  )
}
