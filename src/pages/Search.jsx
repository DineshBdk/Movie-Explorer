import { useEffect } from "react"
import {useSearchParams } from "react-router-dom"
import { Card } from "../components"
import { UseFetch } from "../customHooks/UseFetch"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
  const { data: movies } = UseFetch(apiPath, queryTerm)

  useEffect(() => {
    document.title=`search results for ${queryTerm}`
  })
  
return (
  <main className="container">
    <h5 className="text-white py-2 border-bottom">
    {movies.length==0? `No results found for ${queryTerm}`:`Results for ${queryTerm}`}</h5>
     <div className="row row-cols-sm-1 row-cols-md-2 
          row-cols-lg-3 g-3 py-2 ">
      {movies.map((movie) => {
        return <Card key={movie.id} movie={movie} />
      })}
      </div>
    </main>
  )
}
