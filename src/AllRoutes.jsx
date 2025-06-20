import { Routes,Route} from 'react-router-dom'
import{ErrorPage, MovieDetails, MovieList, Search} from './pages'

const AllRoutes = () => {
    return(
    <>
    <Routes>
        <Route path='/' element={<MovieList title="Your Guide to Great Movies" apiPath="movie/now_playing"/>} />
        <Route path='/top' element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated"/>} />        
        <Route path='/popular' element={<MovieList title="Popular Movies"apiPath="movie/popular"/>} />
        <Route path='/upcoming' element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming" />} />   
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/search' element={<Search apiPath="search/movie"/>}/>
        <Route path='*' element={<ErrorPage title="Page not found"/>} />
        </Routes>
        </>
    )
}
export default AllRoutes;