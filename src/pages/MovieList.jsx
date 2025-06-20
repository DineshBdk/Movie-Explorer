import { useEffect } from "react"
import {useNavigate } from "react-router-dom"
import { Card } from "../components"
import { UseFetch } from "../customHooks/UseFetch"

export const MovieList = ({title,apiPath}) => {
    useEffect(() => {
      document.title = title
    })
  
  const navigator = useNavigate()
  const { data: movies } = UseFetch(apiPath)
  
  return (
    <div>
      <main className="container">
        {title == "Your Guide to Great Movies" ? (
          <div className="p-5 border border-danger mb-5 welcome">
            <h3 className="text-warning">Welcome to MovieExplore</h3>
            <p className="lead text-white">Discover movies you&apos;ll love with personalized suggestions,curated collections and quick searches - your guide to finding great films</p>
            <button className="btn btn-danger" onClick={()=>(navigator("/upcoming"))}>Explore Now</button>
          </div>
        ):""}
      <h5 className=" body-title py-2 mb-4 border-bottom border-white">{title}</h5>
      
        <div className="row row-cols-sm-1 row-cols-md-2 
          row-cols-lg-3 g-3 py-2 ">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}/>
          })}  
       </div>
    </main> 
  </div>
  )
}